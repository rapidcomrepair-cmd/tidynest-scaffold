import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const BookingSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  service_type: z.enum(['standard', 'deep', 'moveinout', 'recurring']),
  bedrooms: z.number().int().min(0).max(5),
  bathrooms: z.union([z.number().int().min(1).max(4), z.literal('half')]),
  living_areas: z.array(z.string()),
  extras: z.array(z.string()),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
  notes: z.string().optional(),
  estimated_price: z.number().int().min(0),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = BookingSchema.parse(body)

    const { error } = await supabase.from('bookings').insert({
      ...data,
      status: 'pending',
    })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data', details: err.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 })
  }

  return NextResponse.json({ bookings: data })
}
