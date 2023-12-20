import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UserState {
    user: object;
    isLoggedIn: boolean;
}
const userState: UserState = {
    user: {},
    isLoggedIn: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        setUser: (state, action: PayloadAction<object>) => {
            state.user = action.payload;
            if(action.payload==null){
                state.isLoggedIn = false;
                return;
            }
            state.isLoggedIn = true;
        },
        removeUser: (state) => {
            state.user = {};
            state.isLoggedIn = false;
        }
    },
}) 

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
