import React, { Component } from "react";
import { Link } from 'react-router-dom';
import posts from "./../../post_data.json";
import './TopicList.css';

class TopicList extends Component {
  render() {
    let displayTopics = posts.map(post => {
      return (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
    return (
      <div className="TopicList">
        <h1>Latest Blog Posts...</h1>
        <ul>{displayTopics}</ul>
      </div>
    );
  }
}

export default TopicList;
