'use client'

import { useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const N = '#080F1A'
const L = '#D4FF47'
const T = '#00C9A7'

const FAQ_CATEGORIES = [
  {
    title: 'Booking & Scheduling',
    items: [
      { q: 'How do I book a cleaning?', a: "Book directly through our website using the Book Now page. Select your rooms, extras, service type, and preferred date — it takes less than 2 minutes. You'll receive a confirmation email once your booking is received." },
      { q: 'Can I reschedule or cancel my booking?', a: "Absolutely. We ask for at least 24 hours' notice for cancellations or rescheduling to avoid a cancellation fee. Contact us by phone or email to make changes anytime." },
      { q: 'How far in advance should I book?', a: "We recommend booking at least 2–3 days in advance to ensure availability, especially for weekends. For same-week bookings, give us a call and we'll do our best to accommodate you." },
      { q: 'Do you offer recurring cleaning plans?', a: 'Yes! We offer weekly, bi-weekly, and monthly recurring plans with discounts of up to 20%. Recurring clients also get priority scheduling and the same cleaner each visit.' },
    ],
  },
  {
    title: 'Pricing & Payments',
    items: [
      { q: 'How is pricing determined?', a: "Pricing is based on the number of rooms, type of service (Standard, Deep, or Move-In/Out), and any add-ons you select. You'll see an estimated price before confirming your booking online." },
      { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards, as well as Venmo, Zelle, and PayPal. Payment is typically collected after the service is completed to your satisfaction.' },
      { q: 'Is there a minimum charge?', a: "Our standard clean starts at $99. Pricing scales with home size and service type. No hidden fees — what you see at booking is what you pay." },
    ],
  },
  {
    title: 'The Cleaning Service',
    items: [
      { q: 'Do I need to be home during the cleaning?', a: "No. Many clients provide a key, a door code, or arrange for us to pick up a key beforehand. All our cleaners are background-checked and fully trusted." },
      { q: 'Do you bring your own cleaning supplies?', a: "Yes — we bring everything. All our products are eco-friendly and non-toxic. If you have a preferred product, just leave it out and let us know." },
      { q: "What if I'm not happy with the clean?", a: "Your satisfaction is guaranteed. Contact us within 24 hours and we'll return to fix it at no extra cost. No hassle, no questions asked." },
      { q: 'Are your cleaners insured and background-checked?', a: "Every team member undergoes a thorough background check before joining TidyNest. We are fully insured, so you're covered in the unlikely event of any damage." },
    ],
  },
  {
    title: 'Special Requests & Add-Ons',
    items: [
      { q: 'Can I request specific tasks not listed?', a: 'Yes. Use the "Special Notes" section at booking. We\'ll confirm whether it\'s included or if a custom quote is needed before your appointment.' },
      { q: 'Do you clean homes with pets?', a: 'Absolutely. Select the "Pets in Home" extra when booking so we can bring the right tools for pet hair removal and use only pet-safe products.' },
    ],
  },
]

export default function FaqPage() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <>
      {/* HERO */}
      <section style={{ background: N, padding: '96px 5% 80px' }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ display: 'inline-block', background: 'rgba(212,255,71,0.1)', color: L, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
            Got questions?
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            Frequently asked questions
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
            Everything you need to know before your first clean. Don't see your question? Reach out — we're happy to help.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 5%' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} style={{ marginBottom: 56 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: T, marginBottom: 20, paddingBottom: 12, borderBottom: `2px solid #E0FDF6` }}>
                {cat.title}
              </div>
              {cat.items.map((item) => {
                const key = `${cat.title}:${item.q}`
                const isOpen = open === key
                return (
                  <div key={item.q} style={{ borderBottom: '1px solid #E4E6EA' }}>
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      style={{ width: '100%', textAlign: 'left', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', fontSize: '0.95rem', fontWeight: 600, color: isOpen ? T : N, transition: 'color 0.15s' }}
                    >
                      {item.q}
                      <span style={{ width: 28, height: 28, borderRadius: '50%', background: isOpen ? '#E0FDF6' : '#F6F7F9', color: isOpen ? T : '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'all 0.25s' }}>
                        ▾
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ paddingBottom: 20, fontSize: '0.9rem', color: '#64748B', lineHeight: 1.8 }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E0FDF6', padding: '72px 5%', textAlign: 'center' }}>
        <h2 style={{ fontWeight: 800, fontSize: '2rem', color: N, letterSpacing: '-0.03em', marginBottom: 12 }}>Still have questions?</h2>
        <p style={{ color: '#64748B', marginBottom: 32, fontSize: '0.95rem' }}>Our team is happy to help. Reach out anytime.</p>
        <Link href="/contact" style={{ background: N, color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '14px 36px', borderRadius: 100, textDecoration: 'none', display: 'inline-block' }}>
          Contact Us
        </Link>
      </section>

      <Footer />
    </>
  )
}
