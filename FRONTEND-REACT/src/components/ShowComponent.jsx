import { useState, useEffect } from "react";
import postService from "../services/postService";

function ShowComponent() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    setPosts(await postService.getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div >
      <h1>Posts</h1>
      {posts.data != undefined && posts.data.date.length>0 &&(
        <table style={{ width: "100%" }} border="1">
          <thead>
            <th>Title</th>
            <th>Date</th>
            <th>Image</th>
          </thead>
          <tbody>
            {posts.data.date.map((post) => (
              <tr>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>
                  <img
                    src={"http://localhost:8080/api/postImages/" + post.image}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ShowComponent;
