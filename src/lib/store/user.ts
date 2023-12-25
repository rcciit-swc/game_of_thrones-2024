import { User } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserState {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const useUser = create<UserState>()((set) => ({
  user: undefined,
  setUser: (user) => set(() => ({ user })),
}));

interface GameState {
  gameName: string | undefined;
  setGame: (gameName: string | undefined) => void;
}

export const useGame = create<GameState>()((set) => ({
  gameName: undefined,
  setGame: (gameName) => set(() => ({ gameName })),
}));
