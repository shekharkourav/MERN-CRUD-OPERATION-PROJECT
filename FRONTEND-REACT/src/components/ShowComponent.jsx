import { useState, useEffect } from "react";
import postService from "../services/postService";

import UpdateModalComponent from "./UpdateModalComponent";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ShowComponent() {
  const [posts, setPosts] = useState({});
  const [isShow, invokemodal] = useState(false);

  const initmodal = () => {
    invokemodal(!isShow);
  };

  const fetchPosts = async () => {
    setPosts(await postService.getPosts());
  };



  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const deletePost=async(id,e)=>{
    var response=await postService.deletePost(id);
    if (response.data.success==true) {
      alert(response.data.msg);
      document.getElementById(id).parentElement.parentElement.remove();
    }
    if(true){
      initmodal();
    }else{
      alert(response.data.msg);
    }
  }

  return (
    <div >
      <h1>Posts</h1>
      {posts.data != undefined && posts.data.date.length>0 &&(
        <table style={{ width: "100%" }} border="1">
          <thead>
            <th>Title</th>
            <th>Date</th>
            <th>Image</th>
            <th>delete</th>
            <th>Edit</th>
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
                <td>
                  <button id={post._id} onClick={(e)=>deletePost(post._id,e)}>Delete</button>
                </td>
                <td>
                  <UpdateModalComponent id={post._id} title={post.title} date={post.date}/>
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
