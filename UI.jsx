import React from 'react';

export function Petals({ count = 24 }) {
  const shapes = [
    "M50,50 Q50,20 65,15 Q80,10 75,30 Q95,30 90,45 Q85,60 70,55 Q75,80 50,80 Q25,80 30,55 Q15,60 10,45 Q5,30 25,30 Q20,10 35,15 Q50,20 50,50 Z",
    "M50,10 C60,20 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 40,20 50,10 Z",
    "M50,40 C50,10 90,10 90,40 C90,70 50,95 50,95 C50,95 10,70 10,40 C10,10 50,10 50,40 Z"
  ];
  const colors = ["#FFB7C5", "#FFC0CB", "#F8C8DC", "#FFD1DC", "#FFF0F5"];

  const petals = React.useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * -25,
      size: 10 + Math.random() * 14,
      opacity: 0.3 + Math.random() * 0.5,
      flipDuration: 3 + Math.random() * 5,
      flipDelay: Math.random() * -5,
      pathIdx: i % shapes.length,
      colorIdx: i % colors.length,
    }))
  , [count]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {petals.map((p, i) => (
        <div key={i} className="petal-fall" style={{
          left: `${p.left}%`, width: p.size, height: p.size,
          animation: `fallLoop ${p.duration}s linear infinite`,
          animationDelay: `${p.delay}s`, opacity: p.opacity
        }}>
          <div className="petal-flip" style={{
            animation: `flutter3D ${p.flipDuration}s ease-in-out infinite`,
            animationDelay: `${p.flipDelay}s`
          }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <path d={shapes[p.pathIdx]} fill={colors[p.colorIdx]} />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Toast({ msg, onDone }) {
  React.useEffect(() => { const t = setTimeout(onDone, 2500); return () => clearTimeout(t); }, []);
  return <div className="toast">✅ {msg}</div>;
}

export function AnimatedPrice({ value, fontSize = '2.2rem', color = 'var(--text-dark)' }) {
  const [displayValue, setDisplayValue] = React.useState(value);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true);
      const t = setTimeout(() => { setDisplayValue(value); setIsAnimating(false); }, 300);
      return () => clearTimeout(t);
    }
  }, [value]);

  return (
    <span style={{
      display: 'inline-block', fontSize, fontWeight: 900, color,
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      transform: isAnimating ? 'scale(1.15)' : 'scale(1)',
      opacity: isAnimating ? 0.6 : 1,
    }}>
      ₹{displayValue}
    </span>
  );
}

export function Reveal({ children, className = '', delay = 0, direction = 'up', style = {} }) {
  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'scale' ? 'reveal-scale' : 'reveal';
  return (
    <div className={`${dirClass} ${className}`.trim()}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}>
      {children}
    </div>
  );
}

export function PageTransition({ children, active }) {
  return (
    <div className={`page-transition ${active ? 'active' : ''}`}>
      {children}
    </div>
  );
}

export function StepIndicator({ steps, current }) {
  return (
    <div className="step-indicator">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="step-dot">
            <div className={`step-dot-circle ${i < current ? 'done' : i === current ? 'active' : 'pending'}`}>
              {i < current ? '✓' : i + 1}
            </div>
            <span className={`step-dot-label${i === current ? ' active' : ''}`}>{s}</span>
          </div>
          {i < steps.length - 1 && <div className={`step-line ${i < current ? 'done' : ''}`} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export function SkeletonCard({ height = 200 }) {
  return (
    <div style={{
      borderRadius: 20, background: 'linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%', animation: 'shimmerSkeleton 1.5s ease-in-out infinite',
      height, width: '100%'
    }} />
  );
}
