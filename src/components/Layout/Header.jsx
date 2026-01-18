import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, User, Menu, X } from 'lucide-react';
import '../../index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--primary-color)' : 'var(--text-primary)',
    fontWeight: 500,
    fontSize: '1.1rem'
  });

  return (
    <header style={{
      borderBottom: '1px solid var(--surface-hover)',
      padding: 'var(--spacing-md) 0',
      position: 'sticky',
      top: 0,
      backgroundColor: '#0a0a0a', // Solid background to prevent transparency issues
      zIndex: 100
    }}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-sm" onClick={closeMenu}>
          <div style={{
            width: 40,
            height: 40,
            backgroundColor: 'var(--primary-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Dumbbell size={24} color="var(--text-inverse)" />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-1px' }}>
            FIT<span style={{ color: 'var(--primary-color)' }}>NESSSS</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="desktop-nav gap-lg">
          <NavLink to="/" style={navLinkStyle}>Programs</NavLink>
          <NavLink to="/recommended" style={navLinkStyle}>For You</NavLink>
          <NavLink to="/pricing" style={navLinkStyle}>Membership</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="desktop-actions gap-md">
          <button className="flex items-center gap-sm" style={{ color: 'var(--text-secondary)' }}>
            <User size={20} />
            <span>Login</span>
          </button>
          <button className="btn btn-primary" style={{ padding: '8px 20px' }}>
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} style={{ color: 'var(--text-primary)' }}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '73px', // Approximate header height
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--bg-color)',
          zIndex: 99,
          padding: 'var(--spacing-xl)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-xl)',
          borderTop: '1px solid var(--surface-hover)'
        }}>
          <nav className="flex flex-col gap-lg items-center">
            <NavLink to="/" style={navLinkStyle} onClick={closeMenu}>Programs</NavLink>
            <NavLink to="/recommended" style={navLinkStyle} onClick={closeMenu}>For You</NavLink>
            <NavLink to="/pricing" style={navLinkStyle} onClick={closeMenu}>Membership</NavLink>
          </nav>

          <div className="flex flex-col gap-md items-center w-full">
            <button className="btn btn-primary" style={{ width: '100%', maxWidth: '300px' }} onClick={closeMenu}>
              Get Started
            </button>
            <button className="flex items-center gap-sm" style={{ color: 'var(--text-secondary)' }} onClick={closeMenu}>
              <User size={20} />
              <span>Login</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
