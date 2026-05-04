import React from 'react';
import { LOGO_SRC, FALLBACK_IMG } from '../utils/helpers.js';
import { useScrolled } from '../hooks/useScrolled.js';

export default function Nav({ onHome, cartCount, onCartOpen, onStart, onThemes, user, onLogout, onLogin }) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(o => !o);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo-block" onClick={() => { onHome(); closeMenu(); }}>
          <div className="nav-logo-img-circle">
            <img loading="lazy" src={LOGO_SRC} alt="Custom Blossom" className="brand-logo"
              onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; }} />
          </div>
          <div className="nav-logo-text">
            <span className="nav-brand">custom blossom</span>
            <span className="nav-tagline">Craft Your Creativity</span>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-links">
            <span className="nav-link" onClick={onHome}>Home</span>
          </div>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800 }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-dark)' }}>{user.name.split(' ')[0]}</span>
                {user.isPremium && <span title="Premium Subscriber" style={{ fontSize: 14 }}>💎</span>}
              </div>
              <button onClick={onLogout} style={{ background: 'none', border: 'none', color: 'var(--pink-deep)', fontSize: 11, fontWeight: 800, cursor: 'pointer', textTransform: 'uppercase' }}>Logout</button>
            </div>
          ) : (
            <button className="nav-login-btn" id="nav-login-btn" onClick={() => { onLogin(); closeMenu(); }}>
              Login / Sign Up
            </button>
          )}

          <button className="nav-cart-btn" onClick={() => { onCartOpen(); closeMenu(); }}>
            <span style={{ fontSize: 18, lineHeight: 1, filter: 'drop-shadow(0 2px 4px rgba(212,104,142,0.3))' }}>🛒</span>
            Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button className={`nav-hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="nav-mobile-link" onClick={() => { onHome(); closeMenu(); }}>🏠 Home</button>
        <div className="nav-mobile-divider" />
        {user ? (
          <>
            <div className="nav-mobile-link" style={{ cursor: 'default', color: 'var(--text-mid)' }}>
              <span>👤 {user.name}</span>
              {user.isPremium && <span style={{ fontSize: 14 }}>💎 Premium</span>}
            </div>
            <button className="nav-mobile-link" onClick={() => { onLogout(); closeMenu(); }}>🚪 Logout</button>
          </>
        ) : (
          <button className="nav-mobile-link" onClick={() => { onLogin(); closeMenu(); }}>🔐 Login / Sign Up</button>
        )}
        <div className="nav-mobile-divider" />
        <button className="nav-mobile-link" onClick={() => { onCartOpen(); closeMenu(); }}>🛒 Cart {cartCount > 0 && `(${cartCount})`}</button>
      </div>
    </>
  );
}
