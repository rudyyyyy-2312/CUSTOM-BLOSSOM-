import React, { useState } from 'react';
import { LOGO_SRC, FALLBACK_IMG } from '../utils/helpers.js';

const EMAIL_REGEX = /\S+@\S+\.\S+/;

export default function AuthGate({ onClose, onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const email = formData.email.trim();
    const password = formData.password;

    if (!EMAIL_REGEX.test(email)) { setLoading(false); return setError('Please enter a valid email address.'); }
    if (password.length < 6) { setLoading(false); return setError('Password must be at least 6 characters.'); }
    if (isSignup && !formData.name) { setLoading(false); return setError('Full name is required.'); }

    const runAuthAction = () => {
      const localUsers = JSON.parse(localStorage.getItem('blossom_users_db') || '[]');
      if (isSignup) {
        if (localUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
          setError('User already exists. Please login instead.'); setLoading(false); return;
        }
        const newUser = { uid: 'local_' + Date.now(), email, password, name: formData.name, isPremium: false };
        localUsers.push(newUser);
        localStorage.setItem('blossom_users_db', JSON.stringify(localUsers));
        setNeedsVerification(true);
        setFormData({ ...formData, uid: newUser.uid });
      } else {
        const match = localUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (!match) { setError('No account found with this email. Please sign up first.'); setLoading(false); return; }
        if (match.password !== password) { setError('Incorrect password. Please try again.'); setLoading(false); return; }
        onLogin({ ...match, emailVerified: true }, rememberMe);
      }
      setLoading(false);
    };
    setTimeout(runAuthAction, 800);
  };

  if (needsVerification) {
    return (
      <div className="auth-modal-overlay fade-in" style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="auth-card bloom-in" style={{ width: 440, padding: 50, background: '#fff', borderRadius: 32, boxShadow: '0 40px 100px rgba(212,104,142,0.15)', textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>🌸</div>
          <h2 style={{ fontFamily: 'Great Vibes', fontSize: 42, color: 'var(--pink-deep)', marginBottom: 12 }}>Welcome aboard!</h2>
          <p style={{ fontSize: 16, color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: 30, fontWeight: 500 }}>
            Your account has been created successfully. Get ready to bloom your creativity!
          </p>
          <button className="btn btn-primary btn-full" onClick={() => {
            onLogin({ name: formData.name, email: formData.email, uid: formData.uid, emailVerified: true, isPremium: false }, true);
            onClose();
          }} style={{ padding: '16px 32px', fontSize: 16 }}>Start Creating Now ✨</button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-modal-overlay fade-in" style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="auth-card bloom-in" style={{ width: 420, padding: 40, background: '#fff', borderRadius: 32, boxShadow: '0 40px 100px rgba(212,104,142,0.15)', border: '1px solid rgba(248,200,220,0.3)', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, border: 'none', background: 'none', fontSize: 20, cursor: 'pointer' }}>✕</button>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <img src={LOGO_SRC} alt="logo" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'contain', background: '#fff', boxShadow: '0 4px 16px rgba(248,156,108,0.3)', display: 'block', margin: '0 auto 8px' }} onError={(e) => { e.target.src = FALLBACK_IMG; }} />
          <div style={{ fontFamily: 'Great Vibes', fontSize: 36, color: 'var(--pink-deep)', marginBottom: 8 }}>{isSignup ? 'Create Account' : 'Welcome Back'}</div>
          <p style={{ fontSize: 13, color: 'var(--text-mid)' }}>Join the community of creators.</p>
        </div>

        {error && <div style={{ background: '#fff1f2', color: '#e11d48', padding: '12px 16px', borderRadius: 12, fontSize: 12, marginBottom: 20, border: '1px solid #fda4af' }}>{error}</div>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {isSignup && (
            <div className="auth-field">
              <label style={{ fontSize: 10, fontWeight: 800, color: '#94a3b8', marginBottom: 6, display: 'block' }}>FULL NAME</label>
              <input type="text" placeholder="Jane Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: 14, borderRadius: 14, border: '1.5px solid #f1f5f9', outline: 'none', boxSizing: 'border-box' }} />
            </div>
          )}
          <div className="auth-field">
            <label style={{ fontSize: 10, fontWeight: 800, color: '#94a3b8', marginBottom: 6, display: 'block' }}>EMAIL ADDRESS</label>
            <input type="email" placeholder="jane@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
              style={{ width: '100%', padding: 14, borderRadius: 14, border: '1.5px solid #f1f5f9', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div className="auth-field">
            <label style={{ fontSize: 10, fontWeight: 800, color: '#94a3b8', marginBottom: 6, display: 'block' }}>PASSWORD</label>
            <div style={{ position: 'relative' }}>
              <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })}
                style={{ width: '100%', padding: 14, paddingRight: 46, borderRadius: 14, border: '1.5px solid #f1f5f9', outline: 'none', boxSizing: 'border-box' }} />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, opacity: 0.5 }}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: -4 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: 'var(--text-mid)', fontWeight: 500 }}>
              <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} style={{ accentColor: 'var(--pink-deep)', width: 16, height: 16 }} />
              Remember Me
            </label>
            {!isSignup && <span style={{ fontSize: 13, color: 'var(--pink-deep)', fontWeight: 600, cursor: 'pointer' }}>Forgot?</span>}
          </div>

          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: 10 }} disabled={loading}>
            {loading ? 'Security Check...' : (isSignup ? 'Create Account' : 'Sign In')}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--text-mid)' }}>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignup(!isSignup)} style={{ color: 'var(--pink-deep)', fontWeight: 700, cursor: 'pointer' }}>
            {isSignup ? 'Login' : 'Sign Up'}
          </span>
        </div>
      </div>
    </div>
  );
}
