import { createSlice } from '@reduxjs/toolkit'
import style from '../css_modules/profileMatching.module.css'

const initialState = {
    animations: {
        avatarClosed: false,
        avatarAnimation: '',
        verifyAnimation: '',
        avatarLabelAnimation: '',
        arrowAnimation: '',
        superLikeAnimation: '',
        likeButtonAnimation: '',
        dislikeButtonAnimation: ''
    }
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        avatarUp: (state) => {
            state.animations.avatarAnimation = style.avatarAnimationUp;
            state.animations.avatarLabelAnimation = style.avatarLabelAnimation;
            state.animations.verifyAnimation = style.verifiedAnimation;
            state.animations.arrowAnimation = style.arrowUpAnimation;
            state.animations.avatarClosed = true;
        },
        avatarDown: (state) => {
            state.animations.avatarAnimation = style.avatarAnimationDown;
            state.animations.avatarLabelAnimation = style.avatarLabelAnimationDown;
            state.animations.verifyAnimation = style.verifiedAnimationDown;
            state.animations.arrowAnimation = style.arrowDownAnimation;
            state.animations.avatarClosed = false;
        },
        clearAvatarAnimation: (state) => {
            state.animations.avatarClosed = false;
            state.animations.avatarAnimation = '';
            state.animations.verifyAnimation = '';
            state.animations.arrowAnimation = '';
            state.animations.avatarLabelAnimation = '';
        },
        superLikeClicked: (state, action) => {
            if (action.payload === 'LIKE') {
                if (!state.animations.avatarClosed) {
                    state.animations.superLikeAnimation = style.superLikeClicked;
                }
                state.animations.likeButtonAnimation = style.buttonAnimation;
            } else {
                state.animations.dislikeButtonAnimation = style.buttonAnimation;
            }
        },
        superLikeDisapear: (state, action) => {
            if (action.payload === "LIKE") {
                state.animations.superLikeAnimation = '';
                state.animations.likeButtonAnimation = '';
            } else {
                state.animations.dislikeButtonAnimation = '';
            }
        }
    }
})

export const { avatarUp, avatarDown, superLikeClicked, superLikeDisapear, clearAvatarAnimation } = profileSlice.actions;
export default profileSlice.reducer;