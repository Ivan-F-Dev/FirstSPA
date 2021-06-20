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

const friendsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {...state, friends: action.friends}
        case SET_TOTAL_FRIENDS_COUNT:
            return {...state, totalFriendsCount: action.count}
        default:
            return state
    }
}

export const setFriends = (friends: any) => ({type: SET_FRIENDS, friends})
export const setTotalFriendsCount = (count: any) => ({type: SET_TOTAL_FRIENDS_COUNT, count})

export const getFriends = (page: any, pageSize: any) => async (dispatch: any) => {
    debugger
    let data = await usersAPI.getFriends(page, pageSize)
    debugger
    dispatch(setFriends(data.items));

    dispatch(setTotalFriendsCount(data.totalCount));
}

export default friendsReducer;