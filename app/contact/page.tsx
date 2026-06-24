'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'

const N = '#080F1A'
const L = '#D4FF47'
const T = '#00C9A7'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 48px; } }
      `}</style>

      <section style={{ background: N, minHeight: 'calc(100vh - 68px)', padding: '80px 5%', display: 'flex', alignItems: 'center' }}>
        <div className="contact-grid" style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

          {/* LEFT */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(212,255,71,0.1)', color: L, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
              Get in touch
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
              We'd love to<br />hear from you
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, fontSize: '0.95rem', maxWidth: 380 }}>
              Have a question, need a custom quote, or just want to chat about your cleaning needs? We're here.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '📞', label: 'Phone', val: '(555) 867-5309' },
                { icon: '✉️', label: 'Email', val: 'hello@tidynest.com' },
                { icon: '🕐', label: 'Hours', val: 'Mon–Sat, 8am – 6pm' },
                { icon: '📍', label: 'Service area', val: 'Greater Metro Area & Suburbs' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '16px 20px' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(212,255,71,0.12)', border: '1px solid rgba(212,255,71,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom trust note */}
            <div style={{ marginTop: 32, padding: '18px 20px', borderRadius: 14, background: 'rgba(0,201,167,0.08)', border: '1px solid rgba(0,201,167,0.18)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 20 }}>💬</span>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                We typically respond within <span style={{ color: T, fontWeight: 600 }}>2 business hours</span>. For urgent requests, call us directly.
              </p>
            </div>
          </div>

          {/* RIGHT — form */}
          <div style={{ background: '#fff', borderRadius: 24, padding: '40px 36px' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: N, letterSpacing: '-0.02em', marginBottom: 28 }}>Send us a message</h3>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '56px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: L, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 20px' }}>✓</div>
                <p style={{ fontWeight: 700, color: N, fontSize: '1.05rem', marginBottom: 8 }}>Message sent!</p>
                <p style={{ fontSize: '0.88rem', color: '#64748B' }}>We'll be in touch within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { label: 'First name', placeholder: 'Jane', type: 'text' },
                    { label: 'Last name', placeholder: 'Smith', type: 'text' },
                  ].map((f) => (
                    <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none', transition: 'border-color 0.15s' }} />
                    </div>
                  ))}
                </div>

                {[
                  { label: 'Email', placeholder: 'jane@email.com', type: 'email', required: true },
                  { label: 'Phone (optional)', placeholder: '(555) 000-0000', type: 'tel', required: false },
                ].map((f) => (
                  <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required} style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none' }} />
                  </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em' }}>What can we help with?</label>
                  <select style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none', background: '#fff' }}>
                    {['General question', 'Booking help', 'Pricing inquiry', 'Feedback / Complaint', 'Custom job quote', 'Other'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Message</label>
                  <textarea placeholder="Tell us more..." required rows={4} style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none', resize: 'vertical' }} />
                </div>

                <button
                  type="submit"
                  style={{ background: L, color: N, fontWeight: 700, fontSize: '0.95rem', padding: '14px', borderRadius: 100, border: 'none', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', marginTop: 4 }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
