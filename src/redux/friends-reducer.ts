import React from "react"
import {usersAPI} from "../api/api";

const SET_FRIENDS = "SET_FRIENDS"
const SET_TOTAL_FRIENDS_COUNT = "SET_TOTAL_FRIENDS_COUNT"

type InitialStateType = {
    friends: Array<object>
    totalFriendsCount: number
    pageSize: number
    currentPage: number
}

let initialState: InitialStateType = {
    friends: [],
    totalFriendsCount: 0,
    pageSize: 10,
    currentPage: 1,
}

const friendsReducer = (state:InitialStateType = initialState, action: SetFriendsActionType | SetTotalFriendsCountActionType): InitialStateType => {
    switch (action.type) {
        case SET_FRIENDS:
            return {...state, friends: action.friends}
        case SET_TOTAL_FRIENDS_COUNT:
            return {...state, totalFriendsCount: action.count}
        default:
            return state
    }
}

type SetFriendsActionType = {
    type: typeof SET_FRIENDS
    friends: Array<object>
}
export const setFriends = (friends: Array<object>):SetFriendsActionType => ({type: SET_FRIENDS, friends})

type SetTotalFriendsCountActionType = {
    type: typeof SET_TOTAL_FRIENDS_COUNT
    count: number
}
export const setTotalFriendsCount = (count: number):SetTotalFriendsCountActionType => ({type: SET_TOTAL_FRIENDS_COUNT, count})

export const getFriends = (page: number, pageSize: number) => async (dispatch: any) => {
    let data = await usersAPI.getFriends(page, pageSize)
    dispatch(setFriends(data.items));
    dispatch(setTotalFriendsCount(data.totalCount));
}

export default friendsReducer;