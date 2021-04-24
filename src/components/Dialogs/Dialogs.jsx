import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import ButtonCommon from "../../common/Buttons/ButtonCommon";

const maxLength10 = maxLengthCreator(10)

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map(d => <DialogItem url={d.url} name={d.name} key={d.id} id={d.id}/>);
    let messagesElements =
        props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>);
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.write}>
                    <DialogsFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}
const DialogsForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit} action="">
            <div>
                <Field className={s.textarea} component={Textarea} name={"newMessageText"}
                       placeholder={"Enter your message"} validate={[required, maxLength10]}/>
            </div>
            <div>
                <ButtonCommon color={"brown"} text={"Send"}/>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: "dialogsForm"})(DialogsForm)

export default Dialogs;