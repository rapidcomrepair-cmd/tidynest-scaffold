import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata = { title: 'Services – TidyNest' }

const N = '#080F1A'
const L = '#D4FF47'
const T = '#00C9A7'

const services = [
  {
    icon: '🧹', badge: 'Most popular', badgeColor: L, badgeText: N,
    title: 'Standard Clean', price: '$99',
    desc: 'Your go-to clean for regular upkeep. Perfect for weekly, bi-weekly, or monthly visits.',
    label: 'Includes',
    items: ['Dusting all surfaces & shelves', 'Vacuuming & mopping floors', 'Bathroom scrub & sanitize', 'Kitchen wipe-down & sink', 'Trash removal', 'Mirrors & glass'],
  },
  {
    icon: '✨', badge: 'Top to bottom', badgeColor: T, badgeText: '#fff',
    title: 'Deep Clean', price: '$179',
    desc: 'Intensive clean of every inch. Great for first-time clients, seasonal resets, or homes that need extra love.',
    label: 'Standard, plus',
    items: ['Inside oven & microwave', 'Scrubbing grout & tile', 'Behind & under appliances', 'Baseboards & door frames', 'Window sills & tracks', 'Light fixtures & vents'],
  },
  {
    icon: '📦', badge: 'Fresh start', badgeColor: '#E0F2FE', badgeText: '#0369A1',
    title: 'Move-In / Move-Out', price: '$249',
    desc: 'Leaving or arriving? We\'ll make every surface sparkle — ideal for getting your deposit back.',
    label: 'Deep, plus',
    items: ['Inside all cabinets & drawers', 'Full appliance interiors', 'Closet walls & shelving', 'Garage sweep (if applicable)', 'Final walk-through'],
  },
  {
    icon: '🔁', badge: 'Best value', badgeColor: '#F3E8FF', badgeText: '#7E22CE',
    title: 'Recurring Clean', price: 'Save up to 20%',
    desc: 'Subscribe to weekly, bi-weekly, or monthly cleans and save. Your home stays cleaner between visits too.',
    label: 'Plan options',
    items: ['Weekly – save 20%', 'Bi-weekly – save 15%', 'Monthly – save 10%', 'Same cleaner every visit', 'Flexible rescheduling', 'Priority booking slots'],
  },
]

const addOns = [
  { icon: '🐾', label: 'Pet hair treatment' },
  { icon: '🍽️', label: 'Dishes washed' },
  { icon: '❄️', label: 'Fridge clean-out' },
  { icon: '🫙', label: 'Inside cabinets' },
  { icon: '🪟', label: 'Interior windows' },
  { icon: '👕', label: 'Laundry (wash & fold)' },
  { icon: '🛏️', label: 'Bed linen change' },
  { icon: '🪴', label: 'Plant dusting' },
]

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: N, padding: '96px 5% 80px' }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ display: 'inline-block', background: 'rgba(212,255,71,0.1)', color: L, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
            What we offer
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            Expert cleaning for every home
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 480 }}>
            From routine upkeep to deep refreshes — residential services designed to fit your home and schedule.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: '#F6F7F9', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {services.map((s) => (
            <div key={s.title} style={{ background: '#fff', border: '1px solid #E4E6EA', borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '28px 28px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
                <span style={{ display: 'inline-block', background: s.badgeColor, color: s.badgeText, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '4px 10px', borderRadius: 100, marginBottom: 14 }}>
                  {s.badge}
                </span>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', color: N, letterSpacing: '-0.02em', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: '0.87rem', color: '#64748B', lineHeight: 1.65, marginBottom: 20 }}>{s.desc}</p>
              </div>
              <div style={{ padding: '0 28px', flex: 1 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', marginBottom: 12 }}>{s.label}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.87rem', color: '#475569' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: T, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ margin: '24px 28px 0', padding: '16px 0', borderTop: '1px solid #E4E6EA', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
                <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Starting from</span>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: N, letterSpacing: '-0.02em' }}>{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section style={{ background: '#fff', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontWeight: 800, fontSize: '2rem', color: N, letterSpacing: '-0.03em', marginBottom: 8 }}>Popular add-ons</h2>
          <p style={{ color: '#64748B', marginBottom: 36, fontSize: '0.95rem' }}>Customize any service with these popular extras.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: 12 }}>
            {addOns.map((a) => (
              <div key={a.label} style={{ background: '#F6F7F9', border: '1px solid #E4E6EA', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', fontWeight: 500, color: N }}>
                <span style={{ fontSize: 18 }}>{a.icon}</span>
                {a.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: N, padding: '80px 5%', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(2rem,4vw,2.8rem)', color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}>Ready to book?</h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', marginBottom: 36 }}>Prices are estimates — your final quote is confirmed after booking.</p>
        <Link href="/book" style={{ background: L, color: N, fontWeight: 700, fontSize: '1rem', padding: '16px 40px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
          Book Your Clean
        </Link>
      </section>

      <Footer />
    </>
  )
}
