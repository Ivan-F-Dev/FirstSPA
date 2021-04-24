import React, {Component} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'
import ProfilePoster from "./ProfilePoster/ProfilePoster";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    console.log("Profile");
    return (
        <div className={s.profile}>
            <ProfilePoster />
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;