import { supabase } from "@/lib";

export async function fetchEvents(id: string | undefined) {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  if (data) {
    return data;
  }
}
