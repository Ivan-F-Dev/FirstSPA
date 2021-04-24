import React from "react"
import s from "./Friends.module.css"
import Friend from "./Friend";

let Friends = ({friends, ...props}) => {

    let friendsList = friends.map(fi => <Friend friend={fi} key={fi.id}/>)

    return <div className={s.Friends}>
        {friendsList}
    </div>
}

export default Friends