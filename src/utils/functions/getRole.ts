import { supabase } from "@/lib";

export async function getRole(
    {
        user_id_param,
        fest_name_param,
        year_param,
    }: {
        user_id_param: string;
        fest_name_param: string;
        year_param: number;
    }
) {
    const { data, error } = await supabase.rpc("fetch_event_roles_using_uid", {
        user_id_param: user_id_param,
        fest_name_param: fest_name_param,
        year_param: year_param,
    });

    if (error) {
        throw error;
    }

    console.log(data)

    return data;
}