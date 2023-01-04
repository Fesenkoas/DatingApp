import { createSlice } from "@reduxjs/toolkit";

const createChat = (name, matched) => {
    let messages = [];
    if(!matched) messages = ['Hello', 'How are you?'];
    return {
        name: name,
        matched: matched,
        messages: messages
    }
}

const initialState = {
    userChats: [createChat('John', true), createChat('Xavier', false), createChat('Fernando', false), createChat('Alex', true), createChat('Diana', true), createChat('Anna', false)],
    names: []
}

const ChatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        getNames: (state) => {
            state.names = [];
            for (let i = 0; i < state.userChats.length; i++) {
                state.names.push(state.userChats[i].name);
            }
        },
        sendMessage: (state, action) => {
            const index = action.payload.index;
            if(state.userChats[index].matched) state.userChats[index].matched = false;
            state.userChats[index].messages.push(action.payload.message);
        }
    }
});

export const { getNames, sendMessage } = ChatsSlice.actions;
export default ChatsSlice.reducer;