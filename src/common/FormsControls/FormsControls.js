import React from "react"
import s from "./FormsControls.module.css"
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";

const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={s.formControl + " " + (hasError ? s.error : null)}>
            <div>
                {children}
            </div>
            <div>{hasError ? <span>{meta.error}</span> : null}</div>
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl{...props}><textarea cols="" rows="" {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, validators, component, type="", props={}, text) =>
    <div>
        <Field placeholder={placeholder} name={name} component={component}
               validate={[validators]} type={type} {...props}/> {text}
    </div>



