import { checkUserExistsinDatabase } from "@/utils/functions/existUser";
import { Database } from "@/utils/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient<Database>({
      cookies: () => cookieStore,
    });
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      // Handle error, perhaps redirect to an error page
      console.error("Error exchanging code for session:", error);
      return NextResponse.redirect("/error"); // Redirect to an error page
    }

    if (data.user) {
      const userExists = await checkUserExistsinDatabase(data.user.id);
      if (!userExists) {
        return NextResponse.redirect(`${requestUrl.origin}/registration`);
      }
      if(userExists){
      return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
    }
  }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
