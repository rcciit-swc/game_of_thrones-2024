"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function regUser(
  username: string,
  college: string,
  phone: string,
) {
  const supabase = createClientComponentClient();
  try {
    const phoneNumber = parseInt(phone);
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          id: user!.id,
          username,
          college,
          phone: phoneNumber,
          email: user?.user_metadata.email,
        },
      ])
      .select();
    if (error) {
      console.error("Error inserting user data:", error);
      return null;
    }
    return data;
  } catch (e) {
    console.log(e);
  }
}
