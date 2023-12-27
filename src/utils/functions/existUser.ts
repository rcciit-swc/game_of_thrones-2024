import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export async function checkUserExistsinDatabase(userId: string) {
  const supabase = createServerComponentClient({ cookies: () => cookies() });
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) {
    console.error("Error getting user data:", error);
    return false;
  }
  return true;
}
