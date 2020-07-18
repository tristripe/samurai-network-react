import React from "react";
import OldPostsList from "./OldPosts/oldPostsList/OldPostsList";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/formsControls/FormsControls";

const Posts = (props) => {

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <section className="posts">
            <div className="new-post">
                <h2>My posts</h2>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className="posts__old">
                <ul>
                    <OldPostsList posts={props.posts}/>
                </ul>
            </div>
        </section>
    );
}

const maxLength10 = maxLengthCreator(10);

const AddNewPost = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Your post" component={Textarea} name="newPostText" validate={[required, maxLength10]}/>
            <button>Send</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPost);

export default Posts;
