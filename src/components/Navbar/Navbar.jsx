import React, {Component} from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";


const Navbar = (props) => {

    let friendsElements =
        props.stateNavbarFriends.friends.map( p => <Friend key={p.id} name={p.name} friendImgUrl={p.friendImgUrl} />);

    return (
        <nav className={s.navBar}>
            <div className={s.links}>
                <div className={s.item}>
                    <NavLink to="/profile" className={s.link} activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={s.link} activeClassName={s.activeLink}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/friends" className={s.link} activeClassName={s.activeLink}>Friends</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={s.link} activeClassName={s.activeLink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={s.link} activeClassName={s.activeLink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={s.link} activeClassName={s.activeLink}>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" className={s.link} activeClassName={s.activeLink}>Users</NavLink>
                </div>
            </div>
            <div className={s.friends}>
                <div className={s.title}>
                    Friends
                </div>
                <div className={s.friendsItem}>
                    {friendsElements}
                </div>
            </div>

        </nav>
    )
}

export default Navbar;