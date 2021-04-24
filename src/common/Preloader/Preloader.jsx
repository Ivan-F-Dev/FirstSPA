import React from 'react'
import preloader from "../../images/loader.svg";
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.divWrap}>
        <img className={s.preloadImg} src={preloader}/>
    </div>
}

export default Preloader;