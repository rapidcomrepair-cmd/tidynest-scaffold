create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  address text,
  service_type text not null check (service_type in ('standard', 'deep', 'moveinout', 'recurring')),
  bedrooms integer not null default 2,
  bathrooms text not null default '2',
  living_areas text[] not null default '{}',
  extras text[] not null default '{}',
  preferred_date text,
  preferred_time text,
  notes text,
  estimated_price integer not null default 0,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table bookings enable row level security;

-- Allow anyone to insert (public booking form)
create policy "Anyone can create a booking" on bookings
  for insert with check (true);

-- Only service role can read/update bookings (employee portal)
create policy "Service role can manage bookings" on bookings
  for all using (auth.role() = 'service_role');
