import React from "react";
import axios from "axios";

import "./App.css";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";

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

  // POST post
  addPost = (e, post) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/posts", post)
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err.resolve);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to the List of Posts</h1>
        <PostsList posts={this.state.posts} />
        <PostForm addPost={this.addPost} />
      </div>
    );
  }
}

export default App;
