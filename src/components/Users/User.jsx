import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import Paginator from "../../common/Paginator/Paginator";


let User = ({user, followingInProgress, unfollow, follow,}) => {
    let usersImgPlaceHolder = "https://github.com/Ivan-F-Dev/imgs/blob/main/usersImgPlaceHolder.png?raw=true"
    return <div className={s.usersItem} >
                <div className={s.imgItem}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : usersImgPlaceHolder} className={s.img}/>
                    </NavLink>
                </div>
                <div className={s.infoItem}>
                    <div>{user.name}</div>
                    <div>id: {user.id}</div>
                    <div>{user.uniqueUrlName === null ? "unique url name: null" : user.uniqueUrlName}</div>
                    <div>{user.status === null ? "status: null" : user.status}</div>
                    <div>{user.followed === true ? "followed: true(подписан)" : "followed: false(не подписан)"}</div>
                </div>
                <div className={s.buttonItem}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }} className={s.unfollow}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }} className={s.follow}>Follow</button>}
                </div>
            </div>
}

export default User