import { configureStore } from "@reduxjs/toolkit";
import chatsSlice from "./chatsSlice";
import profileSlice from "./profileSlice";

const store = configureStore({
    reducer: {
        profile: profileSlice,
        chats: chatsSlice
    }
});

export default store;