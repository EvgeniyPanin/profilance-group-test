import React from "react";
import { connect } from "react-redux";
import {
  selectIsAuth,
  selectIsAdmin,
  selectId,
} from "../../redux/auth-selectors";
import { selectNews, selectSearchValue } from "../../redux/news-selectors";
import Post from "../Post/Post";
import News from "./News";
import {approvedNews, deleteNews, addPost, setSearchValue} from '../../redux/news-reducer';

class NewsContainer extends React.Component {
  render() {
    return <News createNewsList={this.createNewsList} {...this.props} />;
  }

  createNewsList = (news, isAdmin, currentUserId, searchValue) => {
    let middleArr =  [...news]
      .sort((a, b) => {
        if (a.status === "approved" && b.status === "moderation") {
          return 1;
        }
        if (a.status === "moderation" && b.status === "approved") {
          return -1;
        } else {
          return 0;
        }
      })

    if (searchValue) {
      middleArr = middleArr.filter(news => {
        return news.title.includes(searchValue) || news.content.includes(searchValue)
      })
    }
    return middleArr.map((item) => {
        if (!this.props.isAuth) {
          if (item.status === 'moderation') {
            return null;
          }
        }
        return (
          <Post
            key={item.id}
            post={item}
            isAdmin={isAdmin}
            currentUserId={currentUserId}
            approvedNews={this.props.approvedNews}
            deleteNews={this.props.deleteNews}
          />
        );
      });
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: selectIsAuth(state),
    isAdmin: selectIsAdmin(state),
    news: selectNews(state),
    currentUserId: selectId(state),
    searchValue: selectSearchValue(state),
  };
};

export default connect(mapStateToProps, {approvedNews, deleteNews, addPost, setSearchValue})(NewsContainer);
