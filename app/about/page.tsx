import Footer from '@/components/Footer'

export const metadata = { title: 'About – TidyNest' }

const N = '#080F1A'
const L = '#D4FF47'
const T = '#00C9A7'

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: '#F6F7F9', padding: '96px 5% 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#E0FDF6', color: T, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
            Our story
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 800, color: N, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
            Everyone deserves a <span style={{ color: T }}>clean, peaceful home</span>
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#64748B', lineHeight: 1.75 }}>
            TidyNest was born from a simple idea — your home should be a sanctuary, not a source of stress. We take the chore off your plate so you can focus on living.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '96px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ background: N, borderRadius: 28, height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 88 }}>
              🏡
            </div>
            <div style={{ position: 'absolute', bottom: 28, right: -20, background: L, borderRadius: 18, padding: '18px 24px', textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
              <div style={{ fontWeight: 800, fontSize: '2rem', color: N, lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(8,15,26,0.6)', marginTop: 4 }}>Years serving<br />homeowners</div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 800, color: N, letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15 }}>
              Cleaning is our <span style={{ color: T }}>craft</span>
            </h2>
            <p style={{ color: '#64748B', lineHeight: 1.8, marginBottom: 18, fontSize: '0.95rem' }}>
              We started TidyNest to bring something better to home cleaning — skilled, caring professionals who treat your home with the same respect they'd treat their own.
            </p>
            <p style={{ color: '#64748B', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Every cleaner goes through rigorous training and background checks. We don't just clean surfaces — we build trust, one visit at a time.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 36 }}>
              {[
                { title: 'Trustworthy', sub: 'Vetted & insured team' },
                { title: 'Thorough', sub: 'No corner left behind' },
                { title: 'Eco-friendly', sub: 'Safe for family & pets' },
                { title: 'Reliable', sub: 'On time, every time' },
              ].map((v) => (
                <div key={v.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: L, marginTop: 6, flexShrink: 0, border: '2px solid rgba(8,15,26,0.15)' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: N, marginBottom: 2 }}>{v.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{v.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: N, padding: '56px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {[
            { num: '500+', label: 'Homes cleaned' },
            { num: '4.9★', label: 'Average rating' },
            { num: '100%', label: 'Background checked' },
            { num: '5 yrs', label: 'In business' },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', padding: '0 20px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: L, letterSpacing: '-0.03em', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: '#F6F7F9', padding: '96px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(8,15,26,0.06)', color: '#64748B', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
            The team
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.6rem)', fontWeight: 800, color: N, letterSpacing: '-0.03em', marginBottom: 52, lineHeight: 1.15 }}>
            People who genuinely care
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {[
              { i: 'AM', color: L, tc: N, name: 'Ashley M.', role: 'Founder & Lead Cleaner', bio: '8 years in residential cleaning with a passion for perfect results and happy clients.' },
              { i: 'DK', color: T, tc: '#fff', name: 'Diego K.', role: 'Senior Cleaner & Trainer', bio: 'Specializes in deep cleans and move-out services. Sets the bar for the whole team.' },
              { i: 'PL', color: '#A78BFA', tc: '#fff', name: 'Priya L.', role: 'Customer Experience', bio: 'Handles scheduling and support — making sure every booking goes off without a hitch.' },
            ].map((m) => (
              <div key={m.name} style={{ background: '#fff', border: '1px solid #E4E6EA', borderRadius: 20, padding: '28px 24px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', color: m.tc, marginBottom: 16 }}>{m.i}</div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: N, marginBottom: 4, letterSpacing: '-0.01em' }}>{m.name}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 600, color: T, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.role}</div>
                <p style={{ fontSize: '0.87rem', color: '#64748B', lineHeight: 1.65 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
