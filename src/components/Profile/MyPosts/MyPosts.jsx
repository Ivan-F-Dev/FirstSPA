import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import ButtonCommon from "../../../common/Buttons/ButtonCommon";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {

    console.log("MyPosts");

    let postsElements =
        props.stateProfilePagePosts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.postsFormText);
    };

    return (
        <div className={s.myPosts}>
            <div>
                <MyPostsFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const MyPostsForm = (props) => {
    return <form className={s.wrap} onSubmit={props.handleSubmit} action="">
            <div className={s.wrapChild_1_form}>
                <Field component={Textarea} name={"postsFormText"}
                        placeholder={"Post message"} className={s.textarea}
                        cols="" rows="" validate={[required, maxLength10]}/>
            </div>
            <div className={s.wrapChild_2_button}>
                <ButtonCommon color={"brown"} text={"Add post"}/>
            </div>
        </form>
}

const MyPostsFormRedux = reduxForm ({form: "profileAddNewPostForm"}) (MyPostsForm)

export default MyPosts;