import Link from 'next/link'
import Footer from '@/components/Footer'

const N = '#080F1A'
const L = '#D4FF47'
const T = '#00C9A7'

export default function HomePage() {
  return (
    <>
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
        .chips-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .stats-strip { display: grid; grid-template-columns: repeat(4,1fr); }
        .why-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .reviews-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .stat-mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-right { display: none !important; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .reviews-grid { grid-template-columns: 1fr; }
          .stats-strip { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .chips-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: N, height: 'calc(100vh - 68px)', padding: '0 5%', display: 'flex', alignItems: 'center' }}>
        <div className="hero-grid" style={{ width: '100%', maxWidth: 1200, margin: '0 auto' }}>

          {/* LEFT */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,255,71,0.12)', border: '1px solid rgba(212,255,71,0.25)', borderRadius: 100, padding: '6px 14px', marginBottom: 28, alignSelf: 'flex-start' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: L, display: 'inline-block', boxShadow: '0 0 0 3px rgba(212,255,71,0.25)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: L, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Professional Home Cleaning</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem,4vw,4.6rem)', fontWeight: 800, color: '#fff', lineHeight: 1.06, letterSpacing: '-0.03em', marginBottom: 20 }}>
              Your home,<br />
              <span style={{ color: L }}>spotlessly</span> clean.
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: 420, marginBottom: 36 }}>
              Expert cleaners at your door. Reliable, thorough, and tailored to your schedule — so you can focus on what matters.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36 }}>
              <Link href="/book" style={{ background: L, color: N, fontWeight: 700, fontSize: '0.95rem', padding: '14px 32px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
                Book a Clean
              </Link>
              <Link href="/services" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: 100, textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.28)' }}>
                See services
              </Link>
            </div>

            <div className="chips-grid">
              {[
                { icon: '🧹', label: 'Standard Clean', from: 'From $99' },
                { icon: '✨', label: 'Deep Clean', from: 'From $179' },
                { icon: '📦', label: 'Move-In / Out', from: 'From $249' },
                { icon: '🔁', label: 'Recurring', from: 'Save up to 20%' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 14, padding: '13px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{s.label}</div>
                    <div style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s.from}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '40px 0', height: '100%', justifyContent: 'center' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative', flex: 1, minHeight: 380 }}>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
                alt="Professional cleaner tidying a bright home"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, background: 'rgba(8,15,26,0.82)', backdropFilter: 'blur(14px)', borderRadius: 14, padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>Every clean guaranteed</div>
                  <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>100% satisfaction or we return free</div>
                </div>
                <div style={{ background: L, borderRadius: 10, padding: '7px 14px', fontWeight: 800, fontSize: '0.85rem', color: N, whiteSpace: 'nowrap' }}>4.9 ★</div>
              </div>
            </div>

            <div className="stat-mini-grid">
              {[
                { num: '4.9★', label: 'Average rating' },
                { num: '500+', label: 'Homes cleaned' },
                { num: '100%', label: 'Satisfaction guarantee' },
                { num: '<2 min', label: 'To book online' },
              ].map((s) => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '18px 20px' }}>
                  <div style={{ fontWeight: 800, fontSize: '1.4rem', color: L, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E4E6EA' }}>
        <div className="stats-strip" style={{ maxWidth: 1100, margin: '0 auto' }}>
          {[
            { num: '500+', label: 'Happy clients' },
            { num: '4.9★', label: 'Average rating' },
            { num: '100%', label: 'Insured & vetted' },
            { num: '3 hrs', label: 'Avg. clean time' },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid #E4E6EA' : 'none', padding: '48px 20px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: N, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: '#F6F7F9', padding: '96px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#E0FDF6', color: T, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 16 }}>
            Why TidyNest
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: N, letterSpacing: '-0.03em', marginBottom: 52, lineHeight: 1.15 }}>
            Cleaning you can <span style={{ color: T, whiteSpace: 'nowrap' }}>count on</span>
          </h2>
          <div className="why-grid">
            {[
              { icon: '🔒', bg: '#FFF7ED', title: 'Fully insured', desc: 'Every team member is background-checked, trained, and fully insured for complete peace of mind.' },
              { icon: '📅', bg: '#EFF6FF', title: 'Easy scheduling', desc: 'Book online in minutes. Choose your date, rooms, and extras — it takes under 2 minutes.' },
              { icon: '🌿', bg: '#F0FDF4', title: 'Eco-friendly', desc: 'Safe, non-toxic products that are tough on grime and gentle on your family and pets.' },
              { icon: '💬', bg: '#FDF4FF', title: '100% satisfaction', desc: "Not happy? Let us know within 24 hours and we'll make it right — no questions asked." },
            ].map((c) => (
              <div key={c.title} style={{ background: '#fff', border: '1px solid #E4E6EA', borderRadius: 20, padding: '28px 24px' }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 20 }}>{c.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 10, color: N, letterSpacing: '-0.01em' }}>{c.title}</h4>
                <p style={{ fontSize: '0.87rem', color: '#64748B', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: N, padding: '96px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(212,255,71,0.1)', color: L, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 16 }}>
            Real reviews
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 52, lineHeight: 1.15 }}>
            What our clients <span style={{ color: L }}>are saying</span>
          </h2>
          <div className="reviews-grid">
            {[
              { i: 'SL', name: 'Sarah L.', role: 'Recurring client', text: '"TidyNest completely transformed my house. Everything smelled fresh and looked brand new. I\'ve already booked monthly!"' },
              { i: 'MR', name: 'Marcus R.', role: 'Move-Out Clean', text: '"I used the move-out clean and got my full deposit back. Professional, fast, and incredibly thorough. Highly recommend."' },
              { i: 'JT', name: 'Jamie T.', role: 'Deep Clean', text: '"Love that I can add pet hair treatment. My house finally doesn\'t feel like a dog lives here — even though two do!"' },
            ].map((r) => (
              <div key={r.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.82rem', letterSpacing: 2, color: L, marginBottom: 18 }}>★★★★★</div>
                <p style={{ fontSize: '0.93rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: 24, flex: 1 }}>{r.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: L, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.82rem', color: N, flexShrink: 0 }}>{r.i}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{r.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: L, padding: '88px 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: N, letterSpacing: '-0.03em', marginBottom: 14 }}>
          Ready for a cleaner home?
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(8,15,26,0.6)', marginBottom: 40, fontWeight: 500 }}>
          Book online in under 2 minutes. No commitment required.
        </p>
        <Link href="/book" style={{ background: N, color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '16px 44px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
          Book Your Clean
        </Link>
      </section>

      <Footer />
    </>
  )
}
