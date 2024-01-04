import { create } from "zustand";

import { IUser } from "@/types/user";

interface UserState {
  // TODO: Add user type
  user: IUser | undefined;
  setUser: (user: IUser | undefined) => void;
}

export const useUser = create<UserState>()((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));

interface EventState {
  eventId: string | undefined;
  teamType: string | undefined;
  setEvent: (eventId: string | undefined, teamType: string | undefined) => void;
}

export const useEvent = create<EventState>()((set) => ({
  eventId: undefined,
  teamType: undefined,
  setEvent: (eventId, teamType) => set(() => ({ eventId, teamType })),
}));
