import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client instance for database interactions.
 */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

