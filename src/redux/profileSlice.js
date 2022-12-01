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
        likeButtonAnimation: ''
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
        superLikeClicked: (state) => {
            state.animations.superLikeAnimation = style.superLikeClicked;
            state.animations.likeButtonAnimation = style.likeButtonAnimation;
        },
        superLikeDisapear: (state) => {
            state.animations.superLikeAnimation = '';
            state.animations.likeButtonAnimation = '';
        }
    }
})

export const { avatarUp, avatarDown, superLikeClicked, superLikeDisapear } = profileSlice.actions;
export default profileSlice.reducer;