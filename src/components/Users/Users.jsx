import React from 'react';
import s from './Users.module.css';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({users, currentPage, totalUsersCount, pageSize, followingInProgress, follow, unfollow, onPageChanged}) => {
    return <div className={s.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {users.map(u => <User follow={follow} unfollow={unfollow} followingInProgress={followingInProgress}
                              user={u} key={u.id}/>)}
    </div>
}

export default Users