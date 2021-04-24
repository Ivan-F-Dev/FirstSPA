import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
//PROPERTIES 'TYPE' FOR ACTIONS
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
//INITIAL STATE FOR REDUCER
let initialState = {
    posts: [{id: 0, likesCount: 100, message: 'My first post!'}],
    profile: null,
    status: ".....",
}
//REDUCER
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const postsFormText = action.postsFormText
            return {
                ...state,
                posts: [...state.posts, {id: state.posts.length++, message: postsFormText, likesCount: 0,}],
            }//мое эксперементальное решение с id
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: { ...state.profile, photos: action.photos}}
        default:
            return state;
    }
}
//ACTION CREATORS
export const addPost = (postsFormText) => ({type: ADD_POST, postsFormText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const saveProfileSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
//THUNK CREATORS
export const getProfileData = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileData(userId)
    dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    debugger
    if (data.resultCode === 0) {
        dispatch(getProfileData(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
    }
}

//EXPORT REDUCER FOR FN_COMBINE_REDUCERS IN STORE
export default profileReducer;