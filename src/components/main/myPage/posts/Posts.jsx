import React from "react";
import OldPostsList from "./OldPosts/oldPostsList/OldPostsList";

const Posts = (props) => {
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className="posts">
            <div className="new-post">
                <h2>My posts</h2>
                <textarea
                    ref={newPostElement}
                    placeholder="Your post"
                    onChange={onPostChange}
                    value={props.newPostText}/>
                <button onClick={ onAddPost } type="button">Send</button>
            </div>
            <div className="posts__old">
                <ul>
                    <OldPostsList posts={props.posts} />
                </ul>
            </div>
        </section>
    );
}

export default Posts;
