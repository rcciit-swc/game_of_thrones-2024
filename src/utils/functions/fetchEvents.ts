import { createBrowserClient } from "@supabase/ssr";


export async function fetchEvents(name:string){
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );
      const { data, error } = await supabase.from('events').select("*").eq('event_name', name);
      if(data){
        return data;
      }
        if (error) {
            console.error("Error getting user data:", error);
            return;
        }
}