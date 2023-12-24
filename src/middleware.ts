import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { checkUserDetails } from "./utils/functions/checkUserDetails";
import { toast } from "sonner";

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

  const protectedRoutes = ["dashboard", "event-management", "role-management"];

  const pageIndex = request.nextUrl.pathname.split("/")?.[1];

  if (protectedRoutes.includes(pageIndex)) {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    const userDetails = await supabase
      .from("users")
      .select()
      .eq("id", data.session?.user.id);
    if (!checkUserDetails(userDetails?.data?.[0])) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }

    const userRoles = await supabase
    .from("roles").select().eq("user_id", data.session?.user.id);
    console.log(userRoles);
    return response;
  }

  // if (request.nextUrl.href.includes("dashboard")) {
  //   const { data } = await supabase.auth.getSession();
  //   if (!data.session) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  //   return response;
  // }

  // if (request.nextUrl.href.includes("profile")) {
  //   const { data } = await supabase.auth.getSession();
  //   if (!data.session) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  //   const userDetails = await supabase
  //     .from("users")
  //     .select()
  //     .eq("id", data.session?.user.id);

  //   if (!checkUserDetails(userDetails?.data?.[0])) {
  //     return response;
  //   }
  //   return NextResponse.redirect(request.nextUrl.origin);
  // }
}
