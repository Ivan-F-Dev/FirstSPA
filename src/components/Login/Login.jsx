import React from 'react';
import s from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    } else {
        return (
            <div className={s.login}>
                <h1>Login</h1>
                <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
            </div>
        )
    }

};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);