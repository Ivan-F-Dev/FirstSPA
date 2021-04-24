import React, {Component, useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDateFormReduxForm from "./ProfileDataForm";
import ButtonCommon from "../../../common/Buttons/ButtonCommon";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)
    let usersImgPlaceHolder = "https://github.com/Ivan-F-Dev/imgs/blob/main/usersImgPlaceHolder.png?raw=true"
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false)
    }

    return <div className={s.personWrap}>
        <div className={s.statusAndId}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>user ID: {profile.userId != null ? profile.userId : <span>...</span>}</div>
        </div>

        <div className={s.person}>
            <div className={s.personImgWrap}>
                <img className={s.personImg}
                     src={profile.photos.large || usersImgPlaceHolder}/>
                {isOwner && <input className={s.selectFileInput} type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <div className={s.personData}>
                {editMode
                    ? <ProfileDateFormReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    </div>
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.dataOtherWrap}>
        <b><i>Info</i></b>
        <div className={s.dataOther}>
            <div className={s.points}>
                <div><b>fullName</b>:</div>
                <div><b>aboutMe</b>:</div>
                <div><b>lookingForAJob</b>:</div>
                <div><b>lookingForAJobDescription</b>:</div>
            </div>
            <div className={s.values}>
                <div>{profile.fullName != null ? profile.fullName : <span>...</span>}</div>
                <div>{profile.aboutMe != null ? profile.aboutMe : <span>...</span>}</div>
                <div>{profile.lookingForAJob == true ? <span>yes</span> : <span>no</span>}</div>
                <div>{profile.lookingForAJobDescription != null ? profile.lookingForAJobDescription :
                    <span>...</span>}</div>
            </div>
        </div>
        <div>
            <b><i>Contacts</i></b>
            {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        {isOwner && <div onClick={goToEditMode}>
            <ButtonCommon color={"brown"} text={"Edit Mode On"}/>
        </div>}
    </div>

}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.dataOther}><div><b>{contactTitle}</b></div>:<div> {contactValue}</div></div>
}

export default ProfileInfo;