import React, {Component} from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div activeClassName={s.dialogItemActive} className={s.dialogItem}>
            <NavLink className={s.dialog} activeClassName={s.dialogActive}  to={'/dialogs/' + props.id}>{props.name}</NavLink>
            <img className={s.img} src={props.url} alt=""/>
        </div>
    )
}

export default DialogItem;