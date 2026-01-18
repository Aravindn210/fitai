import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, User } from 'lucide-react';
import '../../index.css';

const Header = () => {
  return (
    <header style={{ 
      borderBottom: '1px solid var(--surface-hover)', 
      padding: 'var(--spacing-md) 0',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-sm">
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
            FIT<span style={{ color: 'var(--primary-color)' }}>AI</span>
          </span>
        </NavLink>

        <nav className="flex gap-lg">
          <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? 'var(--primary-color)' : 'var(--text-primary)',
            fontWeight: 500
          })}>Programs</NavLink>
          <NavLink to="/recommended" style={({ isActive }) => ({
            color: isActive ? 'var(--primary-color)' : 'var(--text-primary)',
            fontWeight: 500
          })}>For You</NavLink>
          <NavLink to="/pricing" style={({ isActive }) => ({
            color: isActive ? 'var(--primary-color)' : 'var(--text-primary)',
            fontWeight: 500
          })}>Membership</NavLink>
        </nav>

        <div className="flex gap-md">
          <button className="flex items-center gap-sm" style={{ color: 'var(--text-secondary)' }}>
            <User size={20} />
            <span>Login</span>
          </button>
          <button className="btn btn-primary" style={{ padding: '8px 20px' }}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
