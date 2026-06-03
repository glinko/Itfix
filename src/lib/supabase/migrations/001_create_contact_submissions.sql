create table if not exists contact_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  source text default 'Website',
  status text default 'New Lead'
);

alter table contact_submissions enable row level security;

create policy "Allow anonymous inserts" on contact_submissions for insert with check (true) to anon;
