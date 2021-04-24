import React, {Component} from 'react';
import s from './ButtonCommon.module.css'


const ButtonCommon = (props) => {
    return (
        <button style={{backgroundColor: props.color}} className={s.ButtonCommon}>{props.text}</button>
    )
}

export default ButtonCommon;