import React from "react"
import {usersAPI} from "../api/api";

const SET_FRIENDS = "SET_FRIENDS"
const SET_TOTAL_FRIENDS_COUNT = "SET_TOTAL_FRIENDS_COUNT"

let initialState = {
    friends: [],
    totalFriendsCount: 0,
    pageSize: 10,
    currentPage: 1,
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return {...state, friends: action.friends}
        case SET_TOTAL_FRIENDS_COUNT:
            return {...state, totalFriendsCount: action.count}
        default:
            return state
    }
}

export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const setTotalFriendsCount = (count) => ({type: SET_TOTAL_FRIENDS_COUNT, count})

export const getFriends = (page, pageSize,) => async (dispatch) => {
    debugger
    let data = await usersAPI.getFriends(page, pageSize)
    debugger
    dispatch(setFriends(data.items));

    dispatch(setTotalFriendsCount(data.totalCount));
}

export default friendsReducer;