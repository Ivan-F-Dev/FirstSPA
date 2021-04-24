import React, {Component} from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.friendImg} src={props.friendImgUrl}/>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default Friend;