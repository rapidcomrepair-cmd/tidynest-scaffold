import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ServiceType, BookingExtra, LivingArea } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BASE_PRICES: Record<ServiceType, number> = {
  standard: 99,
  deep: 179,
  moveinout: 249,
  recurring: 99,
}

const BED_EXTRA: Record<number, number> = {
  0: 0,
  1: 0,
  2: 20,
  3: 40,
  4: 60,
  5: 90,
}

const BATH_EXTRA: Record<string, number> = {
  '1': 0,
  '2': 20,
  '3': 40,
  '4': 60,
  half: 10,
}

const EXTRAS_PRICE: Record<BookingExtra, number> = {
  pets: 25,
  dishes: 20,
  fridge: 30,
  oven: 35,
  windows: 40,
  laundry: 45,
  linens: 20,
  cabinets: 30,
}

export function calculatePrice(
  service: ServiceType,
  beds: number,
  baths: number | 'half',
  areas: LivingArea[],
  extras: BookingExtra[]
): number {
  let price = BASE_PRICES[service] ?? 99
  price += BED_EXTRA[beds] ?? 0
  price += BATH_EXTRA[String(baths)] ?? 0
  price += areas.length > 1 ? (areas.length - 1) * 15 : 0
  extras.forEach((e) => { price += EXTRAS_PRICE[e] ?? 0 })
  return price
}
