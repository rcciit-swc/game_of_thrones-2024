import { toast } from "sonner";
import * as Sentry from "@sentry/nextjs";

import { supabase } from "@/lib";

export async function assignRoleToUser(
  phone: string,
  role: string,
  event_id?: string,
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
    toast.error("No user found with this phone number");
    Sentry.captureException(fetch_user_id_error);
    return;
  }

  const { data: role_exists, error: fetch_role_error } = await supabase
    .from("roles")
    .select("role,event_id")
    .match({
      id: user_id.id,
    });

  if (fetch_role_error) {
    toast.error("Error fetching previous role");
    Sentry.captureException(fetch_role_error);
    return;
  }

  let break_out_of_function = false;

  if (role_exists.length != 0) {
    // super_admin role already has access to everything
    role_exists.forEach((role) => {
      if (role.role === "super_admin") {
        toast.warning("User is already a super admin");
        break_out_of_function = true;
        return;
      }
    });

    if (break_out_of_function) return;

    // user already has this role
    role_exists.forEach((role) => {
      console.log(role.event_id, event_id);
      if (role.event_id === event_id) {
        toast.warning("User already has this event role");
        break_out_of_function = true;
        return;
      }
    });

    if (break_out_of_function) return;
  }

  if (role === "super_admin") {
    const { error: delete_role_error } = await supabase
      .from("roles")
      .delete()
      .match({
        id: user_id.id,
      });

    if (delete_role_error) {
      toast.error("Error deleting previously assigned roles to the user");
      Sentry.captureException(delete_role_error);
      return;
    }
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
