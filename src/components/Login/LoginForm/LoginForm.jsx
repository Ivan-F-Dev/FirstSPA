import React from 'react';
import s from './../../../common/FormsControls/FormsControls.module.css'
import {Field} from "redux-form";
import {CreateField, Input} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
            <form onSubmit={handleSubmit} action="">
                    {CreateField("Email","email", required, Input)}
                <div>
                    <Field placeholder={"password"} name={"password"} component={Input} validate={[required, maxLength10]} type={"password"} />
                </div>
                <div>
                    <input component={Input} validate={[required, maxLength10]} name={"rememberMe"} type="checkbox"/> remember me
                </div>
                <div>
                    {captchaUrl && <img src={captchaUrl} alt=""/>}
                    {captchaUrl && CreateField("Symbols","captcha", required, Input)}
                </div>

                { error && <div className={s.formSummaryError}>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

export default LoginForm