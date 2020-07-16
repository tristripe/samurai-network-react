import {addPostActionCreator} from "../../../../redux/myPageReducer";
import {connect} from "react-redux";
import Posts from "./Posts";


const mapStateToProps = (state) => {
    return {
        posts: state.myPage.posts,
        newPostText: state.myPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
