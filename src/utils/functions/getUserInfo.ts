import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
export async function getUserInfo(){
    const supabase = createClientComponentClient();
    const { data: { user } } = await supabase.auth.getUser();
    const {data, error} = await supabase
        .from("users")
        .select("*")
        .eq("id", user?.id)
        .single();
    if (error) {
        console.error("Error getting user data:", error);
        return;
    }
    return data;
}