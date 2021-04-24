import React from 'react';
import s from './ProfilePoster.module.css'
import poster from '../../../images/poster.jpg'

const ProfilePoster = (props) => {
    return(
        <div>
            <img className={s.poster} src={poster}/>
        </div>
    )
}

export default ProfilePoster;