import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./post/Post";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://twitter-clone-3sf0.onrender.com/post`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((p) => (
        <Post key={p._id} p={p} />
      ))}
    </div>
  );
}

export default Feed;
