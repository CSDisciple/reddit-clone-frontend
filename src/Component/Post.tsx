import React, { useEffect, useState } from "react";
import axios from "axios";
import PostAPI from "../API/PostAPI";
interface PostProps {
  postId: [];
}

const Post: React.FC<PostProps> = () => {
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);
  const apiPath = "http://localhost:8080/api/posts/getAllPosts";
  useEffect(() => {
    axios
      .get(apiPath)
      .then((response) => {
        setPostData(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
let loadData = () => {
  for(let key in postData[0]){
    console.log("Key "+ key, "value " + postData[0][key])
    return "Key "+ key + "value " + postData[0][key];
  }
}

  return (
    <>
      <div>{loadData()}</div>
    </>
  );
};

export default Post;
