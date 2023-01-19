import React, { useEffect, useState } from "react";
import axios from "axios";
import PostAPI from "../API/PostAPI";
interface PostProps {
  postId: [];
}

const Post: React.FC<PostProps> = () => {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);
  const apiPath = "http://localhost:8080/api/posts/getAllPosts";
  useEffect(() => {
    axios
      .get(apiPath)
      .then((response) => {
        setPostData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <div>{postData}</div>
    </>
  );
};

export default Post;
