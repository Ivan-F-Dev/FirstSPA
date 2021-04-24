import React from "react"
import s from "./ProfileInfo.module.css";
import {CreateField, Input} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";

const ProfileDataForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        { error && <div className={s.formSummaryError}>{error}</div>}
        <div className={s.dataOther}>
            <div className={s.points}>
                <div>fullName</div>
                <div>aboutMe:</div>
                <div>lookingForAJob:</div>
                <div>lookingForAJobDescription:</div>
                <div>facebook:</div>
                <div>website:</div>
                <div>vk:</div>
                <div>twitter:</div>
                <div>instagram:</div>
                <div>youtube:</div>
                <div>github:</div>
                <div>mainLink:</div>
            </div>
            <div className={s.values}>
                <div>{CreateField("Full name", "fullName",required,Input,)}</div>
                <div>{CreateField("About me", "aboutMe",required,Input,)}</div>
                <div>{CreateField("", "lookingForAJob",required,Input, "checkbox")}</div>
                <div>{CreateField("My professional skills", "lookingForAJobDescription",required,Input,)}</div>
                <div>{CreateField("Facebook", "contacts.facebook",required,Input,)}</div>
                <div>{CreateField("Website", "contacts.website",required,Input,)}</div>
                <div>{CreateField("VK", "contacts.vk",required,Input,)}</div>
                <div>{CreateField("Twitter", "contacts.twitter",required,Input,)}</div>
                <div>{CreateField("Instagram", "contacts.instagram",required,Input,)}</div>
                <div>{CreateField("Youtube", "contacts.youtube",required,Input,)}</div>
                <div>{CreateField("Github", "contacts.github",required,Input,)}</div>
                <div>{CreateField("MainLink", "contacts.mainLink",required,Input,)}</div>
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm