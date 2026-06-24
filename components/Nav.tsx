'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const N = '#080F1A'
const L = '#D4FF47'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          height: 68,
          background: 'rgba(8,15,26,0.94)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 5%',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 32, height: 32, borderRadius: 9, background: L, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 15, color: N, fontFamily: 'Outfit, sans-serif', flexShrink: 0 }}>
            T
          </div>
          <span style={{ fontWeight: 700, fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.02em', fontFamily: 'Outfit, sans-serif' }}>
            Tidy<span style={{ color: L }}>Nest</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '8px 18px',
                borderRadius: 8,
                whiteSpace: 'nowrap',
                color: pathname === link.href ? '#fff' : 'rgba(255,255,255,0.65)',
                background: pathname === link.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                fontFamily: 'Outfit, sans-serif',
                transition: 'color 0.15s, background 0.15s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            style={{
              marginLeft: 16,
              fontSize: '0.95rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '10px 26px',
              borderRadius: 100,
              whiteSpace: 'nowrap',
              background: L,
              color: N,
              fontFamily: 'Outfit, sans-serif',
              display: 'inline-block',
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: open ? L : 'rgba(255,255,255,0.7)', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: open ? L : 'rgba(255,255,255,0.7)', borderRadius: 2, transition: 'all 0.2s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 2, background: open ? L : 'rgba(255,255,255,0.7)', borderRadius: 2, transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: 'fixed', top: 68, left: 0, right: 0, zIndex: 49,
            background: 'rgba(8,15,26,0.98)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            padding: '20px 5% 28px',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}
          className="nav-drawer"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: 10,
                color: pathname === link.href ? '#fff' : 'rgba(255,255,255,0.65)',
                background: pathname === link.href ? 'rgba(255,255,255,0.08)' : 'transparent',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 12,
              fontSize: '1rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '14px 26px',
              borderRadius: 100,
              background: L,
              color: N,
              fontFamily: 'Outfit, sans-serif',
              textAlign: 'center',
            }}
          >
            Book Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
