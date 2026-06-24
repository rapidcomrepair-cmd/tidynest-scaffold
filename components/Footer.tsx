import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Book' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#080F1A', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10 px-[5%]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-[13px] font-black"
            style={{ background: '#D4FF47', color: '#080F1A' }}
          >
            T
          </div>
          <span className="font-bold text-[1.05rem] text-white" style={{ letterSpacing: '-0.02em' }}>
            Tidy<span style={{ color: '#D4FF47' }}>Nest</span>
          </span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.82rem] font-medium no-underline transition-colors"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-[0.78rem]" style={{ color: 'rgba(255,255,255,0.25)' }}>
          © 2025 TidyNest
        </p>
      </div>
    </footer>
  )
}
