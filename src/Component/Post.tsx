import React, { useEffect, useState } from "react";
import axios from "axios";
import PostAPI from "../API/PostAPI";
import { PostObj } from "../API/PostAPI";


const Post: React.FC<{}> = () => {
  const [postData, setPostData] = useState<PostObj[]>();
  const [error, setError] = useState(null);
  useEffect(() => {
    PostAPI.getPosts()
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  //   Object.values(postData).forEach(value => {
  //     for(let key in value){
  //         console.log("Key ", key, "Value",value[key])
  //     }
  //  });

  return (
    <table>
      <thead>Hello World</thead>
      <tbody>
        {postData?.map((key, index) => (
          <tr key={index}>
            <td>{key.subredditName}</td>
            <td>{key.postName}</td>
            <td>{key.description}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Post;
