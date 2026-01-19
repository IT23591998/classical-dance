'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        position: 'fixed',
        top: 0,
        width: '100%',
        height: 'var(--header-height)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(249, 247, 242, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(27, 50, 95, 0.1)' : 'none',
        display: 'flex',
        alignItems: 'center',
    };

    const linkStyles = {
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginLeft: '2rem',
        fontWeight: 500,
    };

    return (
        <nav style={navStyles}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    AURORA
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none' }}>
                    {/* We will hide this with CSS Media Query below, but simpler inline for now with JS checking or CSS class */}
                    <style jsx>{`
             @media (min-width: 769px) {
               .desktop-menu { display: flex !important; }
               .mobile-toggle { display: none !important; }
             }
           `}</style>
                    <Link href="/" style={linkStyles}>Home</Link>
                    <Link href="/about" style={linkStyles}>About</Link>
                    <Link href="/schedule" style={linkStyles}>Schedule</Link>
                    <Link href="/instructors" style={linkStyles}>Instructors</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-midnight-blue)' }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div style={{
                        position: 'absolute',
                        top: 'var(--header-height)',
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: 'var(--color-cream)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: '2rem',
                        gap: '2rem'
                    }}>
                        <Link href="/" onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem' }}>Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem' }}>About</Link>
                        <Link href="/schedule" onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem' }}>Schedule</Link>
                        <Link href="/instructors" onClick={() => setIsOpen(false)} style={{ fontSize: '1.2rem' }}>Instructors</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
