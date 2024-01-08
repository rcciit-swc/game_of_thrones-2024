import { supabase } from "@/lib";

export async function getImageUrl({
  event_id_param,
  image_id_param,
}: {
  event_id_param: string;
  image_id_param: string;
}) {
  const { data } = supabase.storage.from("fests").getPublicUrl(`Game of Thrones/2024/${event_id_param}/transactions/${image_id_param}.png`);

  if (!data) {
    throw new Error("Image not found");
  }

  return data;
}
