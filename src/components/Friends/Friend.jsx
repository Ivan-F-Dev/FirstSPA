import React from "react"
import s from "./../Users/Users.module.css"
import {NavLink} from "react-router-dom";

let Friend = ({friend,...props}) => {
    let usersImgPlaceHolder = "https://github.com/Ivan-F-Dev/imgs/blob/main/usersImgPlaceHolder.png?raw=true"
    return <div className={s.usersItem}>
        <div className={s.imgItem}>
            <NavLink to={'/profile/' + friend.id}>
                <img src={friend.photos.small != null ? friend.photos.small : usersImgPlaceHolder} className={s.img}/>
            </NavLink>
        </div>
        <div className={s.infoItem}>
            <div>{friend.name}</div>
            <div>id: {friend.id}</div>
            <div>{friend.uniqueUrlName === null ? "unique url name: null" : friend.uniqueUrlName}</div>
            <div>{friend.status === null ? "status: null" : friend.status}</div>
            <div>{friend.followed === true ? "followed: true(подписан)" : "followed: false(не подписан)"}</div>
        </div>
    </div>

}

export default Friend

