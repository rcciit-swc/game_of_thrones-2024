import { formDataType } from "@/app/events/_components/RegModal";
import { createBrowserClient } from "@supabase/ssr";


export async function addParticipant({formValues , membersPhone , id}:{formValues:formDataType , membersPhone:string[] ,  id:any}){
    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );
        // const members =[];
    const {data:team,error:teamerror} = await supabase.from("teams").insert({
     event_id: id  ,  team_lead_phone: formValues.team_lead_phone , team_name: formValues.team_name , Transaction_id: formValues.Transaction_id }).select();
    //  for(let i=0 ; i<membersPhone.length ; i++){
    //     const {data:participants,error:participanterror} = await supabase.from("participations").insert({team_name: formValues.team_name  ,  phone:membersPhone[i] , payment_stats:"false" }).select();
    //     members.push(participants);
    //  }
     console.log(team,teamerror);
}