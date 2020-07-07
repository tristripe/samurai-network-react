import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/myPageReducer";
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
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
