import React, {Component} from 'react';
import s from './Message.module.css';

const Message = (props) => {

    return (
        <div className={s.message}>
            <div className={s.answer}>
                <div className={s.messageAnswers}>{props.message}</div>
                <img className={s.answerImg} src="https://github.com/Ivan-F-Dev/imgs/blob/main/Mando.jpg?raw=true"
                     alt=""/>
            </div>
        </div>

    )
}

export default Message;