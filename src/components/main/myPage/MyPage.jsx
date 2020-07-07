import React from "react";
import Profile from "./profile/Profile";
import PostsContainer from "./posts/PostsContainer";

const MyPage = (props) => {
    return (
        <section className="my-page">
            <Profile profile={props.profile}/>
            <PostsContainer/>
        </section>

    );
}
export default MyPage;
