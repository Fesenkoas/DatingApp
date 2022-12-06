import { createSlice } from "@reduxjs/toolkit";

class Chat {
    constructor(name, matched) {
        this.name = name;
        this.matched = matched;
        if (matched) {
            this.messages = [];
        } else {
            this.messages = ['Hello', 'How are you?'];
        }
    }
    getName = () => {
        return this.name;
    }
    getMatched = () => {
        return this.matched;
    }
}

const initialState = {
    userChats: [new Chat('John', true), new Chat('Xavier', false), new Chat('Fernando', false), new Chat('Alex', true), new Chat('Diana', true), new Chat('Anna', false)],
    names: []
}

const ChatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        getNames: (state) => {
            state.names = [];
            for (let i = 0; i < state.userChats.length; i++) {
                state.names.push(state.userChats[i].getName());
            }
        }
    }
});

export const { getNames } = ChatsSlice.actions;
export default ChatsSlice.reducer;