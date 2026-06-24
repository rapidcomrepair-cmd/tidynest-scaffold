'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { calculatePrice } from '@/lib/utils'
import type { ServiceType, BookingExtra, LivingArea } from '@/types'

const N = '#080F1A'
const L = '#D4FF47'
const T = '#00C9A7'
const BORDER = '#E4E6EA'
const MUTED = '#64748B'

type BathVal = number | 'half'

const BED_OPTIONS = [
  { val: 0, label: 'Studio' },
  { val: 1, label: '1 bed' },
  { val: 2, label: '2 beds' },
  { val: 3, label: '3 beds' },
  { val: 4, label: '4 beds' },
  { val: 5, label: '5+ beds' },
]
const BATH_OPTIONS: { val: BathVal; label: string; icon: string }[] = [
  { val: 1, label: '1 bath', icon: '🚿' },
  { val: 2, label: '2 baths', icon: '🚿' },
  { val: 3, label: '3 baths', icon: '🛁' },
  { val: 4, label: '4+ baths', icon: '🛁' },
  { val: 'half', label: 'Half bath', icon: '🪠' },
]
const AREA_OPTIONS: { val: LivingArea; icon: string; label: string }[] = [
  { val: 'living', icon: '🛋️', label: 'Living room' },
  { val: 'kitchen', icon: '🍳', label: 'Kitchen' },
  { val: 'dining', icon: '🍽️', label: 'Dining room' },
  { val: 'office', icon: '💻', label: 'Home office' },
  { val: 'laundry', icon: '🧺', label: 'Laundry room' },
  { val: 'basement', icon: '📦', label: 'Basement' },
  { val: 'hallway', icon: '🚪', label: 'Hallways' },
  { val: 'sunroom', icon: '☀️', label: 'Sunroom' },
]
const EXTRA_OPTIONS: { val: BookingExtra; icon: string; title: string; sub: string }[] = [
  { val: 'pets', icon: '🐾', title: 'Pets in home', sub: 'Pet hair treatment' },
  { val: 'dishes', icon: '🍽️', title: 'Wash dishes', sub: 'Sink & dishwasher' },
  { val: 'fridge', icon: '❄️', title: 'Clean fridge', sub: 'Interior wipe-down' },
  { val: 'oven', icon: '♨️', title: 'Clean oven', sub: 'Interior deep clean' },
  { val: 'windows', icon: '🪟', title: 'Interior windows', sub: 'All window panes' },
  { val: 'laundry', icon: '👕', title: 'Laundry', sub: 'Wash & fold' },
  { val: 'linens', icon: '🛏️', title: 'Change linens', sub: 'Fresh bed sheets' },
  { val: 'cabinets', icon: '🫙', title: 'Inside cabinets', sub: 'All kitchen cabinets' },
]
const SERVICE_OPTIONS: { val: ServiceType; icon: string; label: string; desc: string }[] = [
  { val: 'standard', icon: '🧹', label: 'Standard', desc: 'Regular upkeep' },
  { val: 'deep', icon: '✨', label: 'Deep', desc: 'Top to bottom' },
  { val: 'moveinout', icon: '📦', label: 'Move-In/Out', desc: 'Full service' },
]

const SERVICE_LABELS: Record<ServiceType, string> = { standard: 'Standard Clean', deep: 'Deep Clean', moveinout: 'Move-In/Out', recurring: 'Recurring' }
const AREA_LABELS: Record<LivingArea, string> = { living: 'Living room', kitchen: 'Kitchen', dining: 'Dining room', office: 'Home office', laundry: 'Laundry room', basement: 'Basement', hallway: 'Hallways', sunroom: 'Sunroom' }
const EXTRA_LABELS: Record<BookingExtra, string> = { pets: 'Pet hair', dishes: 'Dishes', fridge: 'Fridge', oven: 'Oven', windows: 'Windows', laundry: 'Laundry', linens: 'Linens', cabinets: 'Cabinets' }

function SectionHead({ num, title, sub }: { num: number; title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', background: N, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, flexShrink: 0 }}>{num}</div>
        <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: N, letterSpacing: '-0.01em' }}>{title}</h3>
      </div>
      <p style={{ fontSize: '0.82rem', color: MUTED, marginLeft: 40 }}>{sub}</p>
    </div>
  )
}

function ToggleChip({ selected, onClick, icon, label }: { selected: boolean; onClick: () => void; icon: string; label: string }) {
  return (
    <button onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '16px 12px', borderRadius: 14, border: `1.5px solid ${selected ? T : BORDER}`, background: selected ? '#E0FDF6' : '#fff', cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'Outfit, sans-serif' }}>
      <span style={{ fontSize: 22 }}>{icon}</span>
      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: selected ? T : N }}>{label}</span>
    </button>
  )
}

const inputStyle = { border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: '11px 14px', fontSize: '0.92rem', fontFamily: 'Outfit, sans-serif', color: N, outline: 'none', width: '100%', background: '#fff' }
const labelStyle: React.CSSProperties = { fontSize: '0.72rem', fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 6 }

export default function BookPage() {
  const [beds, setBeds] = useState(2)
  const [baths, setBaths] = useState<BathVal>(2)
  const [areas, setAreas] = useState<Set<LivingArea>>(new Set(['kitchen']))
  const [extras, setExtras] = useState<Set<BookingExtra>>(new Set())
  const [service, setService] = useState<ServiceType>('standard')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('8:00 AM')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const toggleArea = (a: LivingArea) => setAreas((p) => { const n = new Set(p); n.has(a) ? n.delete(a) : n.add(a); return n })
  const toggleExtra = (e: BookingExtra) => setExtras((p) => { const n = new Set(p); n.has(e) ? n.delete(e) : n.add(e); return n })
  const price = calculatePrice(service, beds, baths, [...areas], [...extras])

  const handleSubmit = async () => {
    if (!name || !email) { setError('Please fill in your name and email to continue.'); return }
    setError(''); setLoading(true)
    try {
      const res = await fetch('/api/bookings', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, phone, address, service_type: service, bedrooms: beds, bathrooms: baths, living_areas: [...areas], extras: [...extras], preferred_date: date, preferred_time: time, notes, estimated_price: price }) })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch { setError('Something went wrong. Please try again.') }
    finally { setLoading(false) }
  }

  if (submitted) return (
    <div style={{ minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F6F7F9', padding: '40px 5%' }}>
      <div style={{ textAlign: 'center', maxWidth: 420 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: L, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, margin: '0 auto 20px', color: N, fontWeight: 800 }}>✓</div>
        <h3 style={{ fontWeight: 800, fontSize: '1.6rem', color: N, letterSpacing: '-0.02em', marginBottom: 12 }}>Booking request sent!</h3>
        <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 28 }}>We'll review your request and confirm via email within 1 business hour.</p>
        <button onClick={() => setSubmitted(false)} style={{ background: N, color: '#fff', fontWeight: 700, fontSize: '0.95rem', padding: '14px 32px', borderRadius: 100, border: 'none', cursor: 'pointer', fontFamily: 'Outfit, sans-serif' }}>
          Book another clean
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* HERO */}
      <section style={{ background: N, padding: '72px 5% 60px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(212,255,71,0.1)', color: L, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 100, marginBottom: 20 }}>
          Online booking
        </div>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12 }}>Book your clean</h1>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: 420 }}>Select your rooms, add your extras, and we'll take it from there. Takes less than 2 minutes.</p>
      </section>

      {/* FORM */}
      <section style={{ background: '#F6F7F9', padding: '60px 5% 80px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 36 }}>

          {/* Bedrooms */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '28px 28px 24px' }}>
            <SectionHead num={1} title="Bedrooms" sub="How many bedrooms need cleaning?" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: 10, marginLeft: 40 }}>
              {BED_OPTIONS.map((o) => <ToggleChip key={o.val} selected={beds === o.val} onClick={() => setBeds(o.val)} icon="🛏️" label={o.label} />)}
            </div>
          </div>

          {/* Bathrooms */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '28px 28px 24px' }}>
            <SectionHead num={2} title="Bathrooms" sub="How many bathrooms / half-baths?" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: 10, marginLeft: 40 }}>
              {BATH_OPTIONS.map((o) => <ToggleChip key={String(o.val)} selected={baths === o.val} onClick={() => setBaths(o.val)} icon={o.icon} label={o.label} />)}
            </div>
          </div>

          {/* Living Areas */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '28px 28px 24px' }}>
            <SectionHead num={3} title="Living areas" sub="Select all common areas that apply." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: 10, marginLeft: 40 }}>
              {AREA_OPTIONS.map((o) => <ToggleChip key={o.val} selected={areas.has(o.val)} onClick={() => toggleArea(o.val)} icon={o.icon} label={o.label} />)}
            </div>
          </div>

          {/* Extras */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '28px 28px 24px' }}>
            <SectionHead num={4} title="Extras" sub="Add special requests to your booking." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 10, marginLeft: 40 }}>
              {EXTRA_OPTIONS.map((o) => {
                const sel = extras.has(o.val)
                return (
                  <button key={o.val} onClick={() => toggleExtra(o.val)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', borderRadius: 14, border: `1.5px solid ${sel ? '#a8cc1a' : BORDER}`, background: sel ? '#f7fde4' : '#fff', cursor: 'pointer', textAlign: 'left', fontFamily: 'Outfit, sans-serif', transition: 'all 0.15s' }}>
                    <span style={{ fontSize: 20 }}>{o.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.83rem', fontWeight: 600, color: N }}>{o.title}</div>
                      <div style={{ fontSize: '0.72rem', color: MUTED, marginTop: 1 }}>{o.sub}</div>
                    </div>
                    <div style={{ width: 18, height: 18, borderRadius: 6, border: `1.5px solid ${sel ? '#a8cc1a' : BORDER}`, background: sel ? '#a8cc1a' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: sel ? N : 'transparent', flexShrink: 0, fontWeight: 700 }}>✓</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Service type */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '28px 28px 24px' }}>
            <SectionHead num={5} title="Service type" sub="Choose the level of clean you need." />
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginLeft: 40 }}>
              {SERVICE_OPTIONS.map((o) => (
                <button key={o.val} onClick={() => setService(o.val)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '18px 24px', borderRadius: 14, border: `1.5px solid ${service === o.val ? T : BORDER}`, background: service === o.val ? '#E0FDF6' : '#fff', cursor: 'pointer', fontFamily: 'Outfit, sans-serif', minWidth: 110, transition: 'all 0.15s' }}>
                  <span style={{ fontSize: 24 }}>{o.icon}</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: service === o.val ? T : N }}>{o.label}</span>
                  <span style={{ fontSize: '0.72rem', color: MUTED }}>{o.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Date & Contact */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 20, padding: '28px 28px 24px' }}>
            <SectionHead num={6} title="Date & contact" sub="When should we come, and how do we reach you?" />
            <div style={{ marginLeft: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>Preferred date</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} /></div>
                <div>
                  <label style={labelStyle}>Preferred time</label>
                  <select value={time} onChange={(e) => setTime(e.target.value)} style={{ ...inputStyle }}>
                    {['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM'].map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>Full name</label><input type="text" placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} /></div>
                <div><label style={labelStyle}>Phone</label><input type="tel" placeholder="(555) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div><label style={labelStyle}>Email</label><input type="email" placeholder="jane@email.com" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} /></div>
                <div><label style={labelStyle}>Home address</label><input type="text" placeholder="123 Main St" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} /></div>
              </div>
              <div>
                <label style={labelStyle}>Special notes (optional)</label>
                <textarea placeholder="Gate codes, pets, allergies, areas to focus on..." value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div style={{ background: N, border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 20, padding: '28px 28px' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: 20 }}>Booking summary</div>
            {[
              ['Bedrooms', BED_OPTIONS.find((b) => b.val === beds)?.label ?? ''],
              ['Bathrooms', BATH_OPTIONS.find((b) => b.val === baths)?.label ?? ''],
              ['Living areas', areas.size ? [...areas].map((a) => AREA_LABELS[a]).join(', ') : 'None'],
              ['Extras', extras.size ? [...extras].map((e) => EXTRA_LABELS[e]).join(', ') : 'None'],
              ['Service', SERVICE_LABELS[service]],
            ].map(([lbl, val]) => (
              <div key={lbl} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.07)', fontSize: '0.87rem' }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>{lbl}</span>
                <span style={{ color: '#fff', fontWeight: 500 }}>{val}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, alignItems: 'baseline' }}>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.87rem' }}>Estimated price</span>
              <span style={{ color: L, fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.03em' }}>${price}</span>
            </div>
          </div>

          {error && <p style={{ color: '#EF4444', fontSize: '0.87rem', textAlign: 'center' }}>{error}</p>}

          <button onClick={handleSubmit} disabled={loading} style={{ background: L, color: N, fontWeight: 800, fontSize: '1.05rem', padding: '18px', borderRadius: 16, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, fontFamily: 'Outfit, sans-serif', transition: 'opacity 0.15s', letterSpacing: '-0.01em' }}>
            {loading ? 'Submitting…' : '✓ Confirm Booking Request'}
          </button>
        </div>
      </section>

      <Footer />
    </>
  )
}
