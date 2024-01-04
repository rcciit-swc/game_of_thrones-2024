import { supabase } from "@/lib";

export const handleLogin = async () => {
  supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: location.origin + "/auth/callback?next=",
    },
  });
};
