import { supabase } from "@/lib";

export async function checkIfRegsClosed({
  event_id_param,
}: {
  event_id_param: string;
}) {
  const { data, error } = await supabase.rpc("regs_closed", {
    event_id_param,
  });

  if (error) {
    throw error;
  }

  return data;
}
