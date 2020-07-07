import React from "react";
import OldPostItem from "../oldPostsItem/OldPostItem";


const OldPostsList = (props) => {

    let postsElements = props.posts.map(post => <OldPostItem message={post.message} likes={post.likesCount} />);
    return (
        <div>
            {postsElements}
        </div>
    );
}

export default OldPostsList;
