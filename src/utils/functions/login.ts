import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export const handleLogin = async () => {
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    
  };