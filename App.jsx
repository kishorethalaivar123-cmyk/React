// src/App.jsx
import React, { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Blog Post", content: "Welcome to my blog!" },
    { id: 2, title: "Second Blog Post", content: "React with Vite is fast." }
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const addPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { id: posts.length + 1, ...newPost }]);
      setNewPost({ title: "", content: "" });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blog Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <br />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <br />
        <button onClick={addPost}>Add Post</button>
      </div>
      <hr />
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;