export type ServiceType = 'standard' | 'deep' | 'moveinout' | 'recurring'

export type BookingExtra =
  | 'pets'
  | 'dishes'
  | 'fridge'
  | 'oven'
  | 'windows'
  | 'laundry'
  | 'linens'
  | 'cabinets'

export type LivingArea =
  | 'living'
  | 'kitchen'
  | 'dining'
  | 'office'
  | 'laundry'
  | 'basement'
  | 'hallway'
  | 'sunroom'

export interface BookingRequest {
  id?: string
  name: string
  email: string
  phone: string
  address: string
  service_type: ServiceType
  bedrooms: number
  bathrooms: number | 'half'
  living_areas: LivingArea[]
  extras: BookingExtra[]
  preferred_date: string
  preferred_time: string
  notes?: string
  estimated_price: number
  status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  created_at?: string
}
