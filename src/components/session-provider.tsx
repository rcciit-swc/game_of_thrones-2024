"use client";

import { useEffect } from "react";

import { useUser } from "@/lib";
import { getUserInfo } from "@/utils";

const SessionProvider = () => {
  const setUser = useUser((state) => state.setUser);

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
