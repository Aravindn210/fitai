import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--surface-color)',
            borderTop: '1px solid var(--surface-hover)',
            padding: 'var(--spacing-xl) 0 var(--spacing-lg)',
            marginTop: 'var(--spacing-xl)'
        }}>
            <div className="container">
                <div className="grid gap-lg" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-sm" style={{ marginBottom: 'var(--spacing-md)' }}>
                            <div style={{
                                width: 32, height: 32,
                                backgroundColor: 'var(--primary-color)',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Dumbbell size={18} color="var(--text-inverse)" />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 900 }}>
                                FIT<span style={{ color: 'var(--primary-color)' }}>AI</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Transforming lives through personalized fitness, nutrition, and AI-driven coaching.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem' }}>Sitemap</h4>
                        <ul className="flex flex-col gap-sm" style={{ color: 'var(--text-secondary)' }}>
                            <li><Link to="/">Programs</Link></li>
                            <li><Link to="/recommended">For You</Link></li>
                            <li><Link to="/pricing">Membership</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem' }}>Support</h4>
                        <ul className="flex flex-col gap-sm" style={{ color: 'var(--text-secondary)' }}>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.1rem' }}>Connect</h4>
                        <div className="flex gap-md">
                            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Instagram size={24} /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Twitter size={24} /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Facebook size={24} /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}><Mail size={24} /></a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--surface-hover)',
                    paddingTop: 'var(--spacing-lg)',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} FitAI Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
