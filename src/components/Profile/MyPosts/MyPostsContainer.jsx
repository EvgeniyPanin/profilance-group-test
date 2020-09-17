import MyPosts from "./MyPosts";
import {addPost} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import { selectPosts, selectAvatar } from "../../../redux/profile-selectors";

const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state),
        userAvatar: selectAvatar(state),
    }
}

const MyPostsContainer = connect(mapStateToProps, 
    {addPost})(MyPosts);

export default MyPostsContainer;