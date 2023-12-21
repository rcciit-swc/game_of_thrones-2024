import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function logOut() {
    const supabase = createClientComponentClient();
    await supabase.auth.signOut();
  }