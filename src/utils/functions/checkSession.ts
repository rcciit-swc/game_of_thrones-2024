import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const checkSession = async () => {
  const supabase = createClientComponentClient();
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error(error);
    return null;
  }

  if (data.session == null) {
    return null;
  }

  return data;
};
