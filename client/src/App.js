import React from "react";
import axios from "axios";

import "./App.css";
import PostsList from "./components/PostsList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  // GET posts
  componentDidMount() {
    axios.get("http://localhost:5000/api/posts").then(res => {
      console.log(res.data);
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to React App</h2>
        <PostsList posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
