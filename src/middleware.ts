import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
      },
    },
  );

  // if (request.nextUrl.pathname.startsWith("/events")) {
  //   console.log(request.nextUrl);
  //   return NextResponse.redirect(new URL("/gallery", request.url));
  // }

  // if (
  //   request.nextUrl.href.includes("dashboard") ||
  //   request.nextUrl.href.includes("profile")
  // ) {
  //   const { data } = await supabase.auth.getSession();
  //   if (!data.session) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  //   return response;
  // }

  if (request.nextUrl.href.includes("dashboard")) {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return response;
  }

  if (request.nextUrl.href.includes("profile")) {
    const { data } = await supabase.from("users").select();
    const data2 = await supabase.auth.getSession();
    console;
    const isNamePresent = data?.some(
      (da) => da.id === data2.data.session?.user.id,
    );
    if (isNamePresent) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return response;
  }
}
