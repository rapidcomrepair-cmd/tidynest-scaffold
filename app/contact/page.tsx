'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'

const N = '#080F1A'
const L = '#D4FF47'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section style={{ background: N, padding: '96px 5%' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* LEFT */}
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(212,255,71,0.1)', color: L, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
              Get in touch
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.4rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
              We'd love to hear from you
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 48, fontSize: '0.95rem' }}>
              Have a question, need a custom quote, or just want to chat about your cleaning needs? We're here.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '📞', label: 'Phone', val: '(555) 867-5309' },
                { icon: '✉️', label: 'Email', val: 'hello@tidynest.com' },
                { icon: '🕐', label: 'Hours', val: 'Mon–Sat, 8am – 6pm' },
                { icon: '📍', label: 'Service area', val: 'Greater Metro Area & Suburbs' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '16px 20px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: L, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.82rem', color: '#fff', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div style={{ background: '#fff', borderRadius: 24, padding: '40px 36px' }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: N, letterSpacing: '-0.02em', marginBottom: 28 }}>Send us a message</h3>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: L, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 16px' }}>✓</div>
                <p style={{ fontWeight: 600, color: N, fontSize: '1rem' }}>Message sent! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[{ label: 'First name', placeholder: 'Jane', type: 'text' }, { label: 'Last name', placeholder: 'Smith', type: 'text' }].map((f) => (
                    <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none' }} />
                    </div>
                  ))}
                </div>
                {[
                  { label: 'Email', placeholder: 'jane@email.com', type: 'email', required: true },
                  { label: 'Phone (optional)', placeholder: '(555) 000-0000', type: 'tel', required: false },
                ].map((f) => (
                  <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.required} style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none' }} />
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>What can we help with?</label>
                  <select style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none', background: '#fff' }}>
                    {['General question', 'Booking help', 'Pricing inquiry', 'Feedback / Complaint', 'Custom job quote', 'Other'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Message</label>
                  <textarea placeholder="Tell us more..." required rows={4} style={{ border: '1.5px solid #E4E6EA', borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none', resize: 'vertical' }} />
                </div>
                <button type="submit" style={{ background: N, color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '14px', borderRadius: 12, border: 'none', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', marginTop: 4, transition: 'opacity 0.15s' }}>
                  Send Message
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
