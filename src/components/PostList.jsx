import React, { Component } from "react";
import API from "../utils/API";
import { connect } from "react-redux";

class PostList extends Component {
  componentDidMount = async () => {
    const API_CALL = await API.get(`/posts`);
    console.log(API_CALL.data);
  };
  render() {
    return (
      <div>
        <h3>Post List Component</h3>
      </div>
    );
  }
}

export default PostList;
