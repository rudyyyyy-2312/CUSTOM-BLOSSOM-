import { useEffect } from 'react';
import { useIsMobile } from './useIsMobile.js';

let globalRevealObserver = null;

const getGlobalObserver = () => {
  if (!globalRevealObserver) {
    globalRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            globalRevealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
  }
  return globalRevealObserver;
};

export function useGlobalReveal() {
  useEffect(() => {
    const observer = getGlobalObserver();
    const initReveal = () => {
      const elements = document.querySelectorAll(
        '.reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active), .reveal-scale:not(.active)'
      );
      elements.forEach((el) => observer.observe(el));
    };
    initReveal();
    const mo = new MutationObserver(initReveal);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      globalRevealObserver = null;
      mo.disconnect();
    };
  }, []);
}

export function usePremiumInteractions() {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip heavy effects on mobile
    if (isMobile || window.matchMedia('(hover: none)').matches) return;

    const petal = document.createElement('div');
    petal.className = 'cursor-petal';
    petal.innerHTML = `
      <svg viewBox="0 0 100 100" class="cursor-petal-inner">
        <path d="M50,5 C60,20 85,35 85,55 C85,85 50,95 50,95 C50,95 15,85 15,55 C15,35 40,20 50,5 Z" />
      </svg>
    `;
    document.body.appendChild(petal);

    const scrollBar = document.createElement('div');
    scrollBar.className = 'scroll-progress';
    document.body.appendChild(scrollBar);

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let currentRot = 0;
    let animId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const target = e.target.closest(
        'a, button, .product-card, .hero-product-card, .theme-card, .btn-primary, .nav-link, .glow-btn, .entry-btn'
      );
      if (target) petal.classList.add('hovering');
      else petal.classList.remove('hovering');
    };

    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      scrollBar.style.width = (winScroll / height) * 100 + '%';
    };

    const animate = () => {
      const lerp = 0.15;
      currentX += (mouseX - currentX) * lerp;
      currentY += (mouseY - currentY) * lerp;
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 1) {
        const targetRot = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        let diff = targetRot - currentRot;
        while (diff < -180) diff += 360;
        while (diff > 180) diff -= 360;
        currentRot += diff * 0.12;
      }
      petal.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${currentRot}deg)`;
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    animId = requestAnimationFrame(animate);

    // Card tilt effect
    let cards = [];
    const handleCardMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const tiltX = (cy - y) / 12;
      const tiltY = (x - cx) / 12;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`;
    };
    const handleCardLeave = (e) => {
      e.currentTarget.style.transform = '';
    };
    const attachTilt = () => {
      cards.forEach((c) => {
        c.removeEventListener('mousemove', handleCardMove);
        c.removeEventListener('mouseleave', handleCardLeave);
      });
      cards = Array.from(
        document.querySelectorAll('.hero-product-card, .product-card, .theme-card, .mode-card')
      );
      cards.forEach((c) => {
        c.addEventListener('mousemove', handleCardMove);
        c.addEventListener('mouseleave', handleCardLeave);
      });
    };
    const mo = new MutationObserver(attachTilt);
    mo.observe(document.body, { childList: true, subtree: true });
    attachTilt();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
      petal.remove();
      scrollBar.remove();
      mo.disconnect();
    };
  }, [isMobile]);
}
