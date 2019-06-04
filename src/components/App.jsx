import React, { Component } from "react";
import PostList from "./PostList";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>Heey</h1>
        <PostList />
      </div>
    );
  }
}

export default App;
