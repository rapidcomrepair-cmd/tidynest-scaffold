'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[68px] border-b"
      style={{
        background: 'rgba(8,15,26,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: 'rgba(255,255,255,0.07)',
        padding: '0 5%',
      }}
    >
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[15px] font-black"
          style={{ background: '#D4FF47', color: '#080F1A', fontFamily: 'Outfit, sans-serif' }}
        >
          T
        </div>
        <span className="font-bold text-[1.15rem] text-white" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>
          Tidy<span style={{ color: '#D4FF47' }}>Nest</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
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
            background: '#D4FF47',
            color: '#080F1A',
            fontFamily: 'Outfit, sans-serif',
            display: 'inline-block',
          }}
        >
          Book Now
        </Link>
      </div>
    </nav>
  )
}
