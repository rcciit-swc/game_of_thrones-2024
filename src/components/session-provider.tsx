"use client";

import { useUser } from "@/lib/store/user";
import { getUserInfo } from "@/utils/functions/getUserInfo";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect } from "react";

const SessionProvider = () => {
  const setUser = useUser((state) => state.setUser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const readUserSession = async () => {
    const userData = await getUserInfo();
    setUser(userData);
  };

  useEffect(() => {
    readUserSession();

    //eslint-disable-next-line
  }, []);

  return <></>;
};

export default SessionProvider;
