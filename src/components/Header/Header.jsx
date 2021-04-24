import React, {Component} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import ButtonCommon from "../../common/Buttons/ButtonCommon";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://seeklogo.com/images/B/Boba_Fett-logo-269341E5B6-seeklogo.com.png'/>
            {props.login && <div className={s.NavLink}>
                <NavLink to={'/profile'} className={s.NavLink}>
                    <ButtonCommon text={props.login}/>
                </NavLink>
            </div>}
            <div className={s.loginBlock}>

                {props.isAuth
                    ? <div>
                        <NavLink to={'/login'} className={s.NavLink} onClick={props.logout}>
                            <ButtonCommon text={"Logout"}/>
                        </NavLink>
                    </div>
                    : <div>
                        <NavLink to={'/login'} className={s.NavLink} >
                            <ButtonCommon text={"Login"}/>
                        </NavLink>
                    </div>}
            </div>
        </header>
    )
}

/*<button onClick={props.logout}>Log out</button>*/

export default Header;