import { supabase } from "@/lib/supabase-client";

export const handleLogin = async () => {
  supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: location.origin + "/profile",
    },
  });
};
