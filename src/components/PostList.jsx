import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // setPosts([postData, ...posts]);
    setPosts((prevPosts) => [...prevPosts, postData]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}
