import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = { title, content };
      setPosts(updatedPosts);
      setEditIndex(null);
    } else {
      setPosts([...posts, { title, content }]);
    }
    setTitle("");
    setContent("");
  };

  const handleEdit = (index) => {
    setTitle(posts[index].title);
    setContent(posts[index].content);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <header>
        <h1>✨ Content Creator Blog Manager ✨</h1>
        <p className="subtitle">Create, edit & manage your blogs beautifully</p>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit">
          {editIndex !== null ? "💾 Update Post" : "➕ Add Post"}
        </button>
      </form>

      <div className="posts">
        {posts.length === 0 ? (
          <p className="empty">🚀 No posts yet. Start writing your first blog!</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="post-card">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="actions">
                <button className="edit" onClick={() => handleEdit(index)}>✏️ Edit</button>
                <button className="delete" onClick={() => handleDelete(index)}>🗑️ Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
