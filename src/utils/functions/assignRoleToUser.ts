import { supabase } from "@/lib/supabase-client";
import { toast } from "sonner";
import * as Sentry from "@sentry/nextjs";

export async function assignRoleToUser(
  phone: string,
  role: string,
  event_id: string,
) {
  // any role other than super_admin must have an event_id
  if (!event_id && role !== "super_admin") {
    toast.warning("Select an event");
    return;
  }

  const { data: user_id, error: fetch_user_id_error } = await supabase
    .from("users")
    .select("id")
    .eq("phone", phone)
    .single();

  if (fetch_user_id_error || !user_id) {
    toast.error("Error fetching user id");
    Sentry.captureException(fetch_user_id_error);
    return;
  }

  const { data: role_exists, error: fetch_role_error } = await supabase
    .from("roles")
    .select("role")
    .match({
      id: user_id.id,
      event_id,
    });

  if (fetch_role_error) {
    toast.error("Error fetching previous role");
    Sentry.captureException(fetch_role_error);
    return;
  }

  if (role_exists) {
    toast.warning("User already has this event role");
    return;
  }

  const { error: insert_role_error } = await supabase.from("roles").insert({
    id: user_id.id,
    role,
    event_id: role === "super_admin" ? null : event_id,
  });

  if (insert_role_error) {
    toast.error("Error assigning role to user");
    Sentry.captureException(insert_role_error);
    return;
  }

  toast.success("Role assigned successfully");
}
