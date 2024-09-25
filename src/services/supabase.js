import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://auwlhyotpxmfadbrtjaw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1d2xoeW90cHhtZmFkYnJ0amF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwODU3ODgsImV4cCI6MjA0MjY2MTc4OH0.eyIaZKOwzghVirsvcwb1thrKwUknHyoQhtvKMEoZXUA" 
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
