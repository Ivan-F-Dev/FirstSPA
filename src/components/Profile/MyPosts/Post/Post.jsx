import React, { Component } from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div className={s.item}>
        <img className={s.img} src='https://github.com/Ivan-F-Dev/imgs/blob/main/Mando.jpg?raw=true' alt=""/>
        <div className={s.message}>{props.message}</div>
        <div><span>like: {props.like}</span></div>
    </div>
    )            
}

export default Post;