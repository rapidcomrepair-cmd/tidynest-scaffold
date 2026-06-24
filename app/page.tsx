import Link from 'next/link'
import Footer from '@/components/Footer'

const N = '#080F1A'
const L = '#D4FF47'
const T = '#00C9A7'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: N, minHeight: 'calc(100vh - 68px)', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', padding: '80px 5%', gap: 60 }}>
        {/* LEFT */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,255,71,0.12)', border: '1px solid rgba(212,255,71,0.25)', borderRadius: 100, padding: '6px 14px', marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: L, display: 'inline-block' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: L, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Professional Home Cleaning</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem,5.5vw,5rem)', fontWeight: 800, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24 }}>
            Your home,<br />
            <span style={{ color: L }}>spotlessly</span> clean.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 440, marginBottom: 44 }}>
            Expert cleaners at your door. Reliable, thorough, and tailored to your schedule — so you can focus on what matters.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
            <Link href="/book" style={{ background: L, color: N, fontWeight: 700, fontSize: '0.95rem', padding: '14px 32px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
              Book a Clean
            </Link>
            <Link href="/services" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: 600, fontSize: '0.95rem', padding: '14px 32px', borderRadius: 100, textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)' }}>
              See services
            </Link>
          </div>

          {/* service chips */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { icon: '🧹', label: 'Standard Clean', from: 'From $99' },
              { icon: '✨', label: 'Deep Clean', from: 'From $179' },
              { icon: '📦', label: 'Move-In / Out', from: 'From $249' },
              { icon: '🔁', label: 'Recurring', from: 'Save up to 20%' },
            ].map((s) => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#fff' }}>{s.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{s.from}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — visual panel */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* main card */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 28, padding: '40px 36px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: 20 }}>🏡</div>
            <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>Your home, our expertise</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 28 }}>
              Trusted by 500+ homeowners. Every clean is backed by our 100% satisfaction guarantee.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['Insured', 'Background-checked', 'Eco-friendly'].map((tag) => (
                <span key={tag} style={{ fontSize: '0.7rem', fontWeight: 600, color: T, background: 'rgba(0,201,167,0.12)', border: '1px solid rgba(0,201,167,0.25)', borderRadius: 100, padding: '4px 10px' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* floating stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { num: '4.9★', label: 'Average rating', color: L },
              { num: '500+', label: 'Homes cleaned', color: T },
              { num: '100%', label: 'Satisfaction guarantee', color: '#A78BFA' },
              { num: '<2 min', label: 'To book online', color: L },
            ].map((s) => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '20px 20px' }}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', color: s.color, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E4E6EA' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '52px 5%', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {[
            { num: '500+', label: 'Happy clients' },
            { num: '4.9★', label: 'Average rating' },
            { num: '100%', label: 'Insured & vetted' },
            { num: '3 hrs', label: 'Avg. clean time' },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid #E4E6EA' : 'none', padding: '0 20px' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: N, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: '#F6F7F9', padding: '100px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#E0FDF6', color: T, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
            Why TidyNest
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: N, letterSpacing: '-0.03em', maxWidth: 480, marginBottom: 56, lineHeight: 1.15 }}>
            Cleaning you can <span style={{ color: T }}>count on</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 20 }}>
            {[
              { icon: '🔒', title: 'Fully insured', desc: 'Every team member is background-checked, trained, and fully insured for complete peace of mind.' },
              { icon: '📅', title: 'Easy scheduling', desc: 'Book online in minutes. Choose your date, rooms, and extras — it takes under 2 minutes.' },
              { icon: '🌿', title: 'Eco-friendly', desc: 'Safe, non-toxic cleaning products that are tough on grime and gentle on your family and pets.' },
              { icon: '💬', title: '100% satisfaction', desc: "Not happy? Let us know within 24 hours and we'll make it right — no questions asked." },
            ].map((c) => (
              <div key={c.title} style={{ background: '#fff', border: '1px solid #E4E6EA', borderRadius: 20, padding: '28px 24px', transition: 'box-shadow 0.2s, transform 0.2s' }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{c.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 10, color: N, letterSpacing: '-0.01em' }}>{c.title}</h4>
                <p style={{ fontSize: '0.87rem', color: '#64748B', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: N, padding: '100px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(212,255,71,0.1)', color: L, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
            Real reviews
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 56, lineHeight: 1.15 }}>
            What our clients <span style={{ color: L }}>are saying</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {[
              { i: 'SL', name: 'Sarah L.', role: 'Recurring client', text: '"TidyNest completely transformed my house. Everything smelled fresh and looked brand new. I\'ve already booked monthly!"' },
              { i: 'MR', name: 'Marcus R.', role: 'Move-Out Clean', text: '"I used the move-out clean and got my full deposit back. Professional, fast, and incredibly thorough. Highly recommend."' },
              { i: 'JT', name: 'Jamie T.', role: 'Deep Clean', text: '"Love that I can add pet hair treatment. My house finally doesn\'t feel like a dog lives here — even though two do!"' },
            ].map((r) => (
              <div key={r.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 24px' }}>
                <div style={{ fontSize: '0.85rem', letterSpacing: 3, color: L, marginBottom: 16 }}>★★★★★</div>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 20 }}>{r.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: L, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', color: N }}>{r.i}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>{r.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: L, padding: '80px 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: N, letterSpacing: '-0.03em', marginBottom: 16 }}>
          Ready for a cleaner home?
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(8,15,26,0.6)', marginBottom: 36, fontWeight: 500 }}>
          Book online in under 2 minutes. No commitment required.
        </p>
        <Link href="/book" style={{ background: N, color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '16px 40px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
          Book Your Clean
        </Link>
      </section>

      <Footer />
    </>
  )
}
