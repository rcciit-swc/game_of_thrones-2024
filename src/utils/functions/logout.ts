import { supabase } from "@/lib/supabase-client";

export async function logOut() {
  await supabase.auth.signOut();
}
