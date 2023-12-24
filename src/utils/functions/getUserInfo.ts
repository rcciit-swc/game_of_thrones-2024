import { createBrowserClient } from "@supabase/ssr";

export async function getUserInfo() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const { data, error } = await supabase.auth.getSession();
  const userDetails = await supabase
    .from("users")
    .select()
    .eq("id", data.session?.user.id);

  if (error) {
    console.error("Error getting user data:", error);
    return;
  }
  return userDetails?.data?.[0];
}
