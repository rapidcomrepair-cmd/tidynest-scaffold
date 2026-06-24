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

      <ul className="hidden md:flex list-none items-center gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                'text-[1rem] font-medium no-underline px-5 py-2.5 rounded-lg transition-all duration-150 whitespace-nowrap',
                pathname === link.href
                  ? 'text-white bg-white/10'
                  : 'text-white/70 hover:text-white hover:bg-white/8'
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="ml-4">
          <Link
            href="/book"
            className="text-[0.95rem] font-semibold no-underline rounded-full transition-all duration-150 hover:opacity-90 whitespace-nowrap"
            style={{ background: '#D4FF47', color: '#080F1A', padding: '10px 24px', display: 'inline-block', lineHeight: 1.4 }}
          >
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  )
}
