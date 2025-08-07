import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;       // from env
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;  // from env

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
