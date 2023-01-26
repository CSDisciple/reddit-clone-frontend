import React, { FC, useEffect, useState } from "react";
import PostAPI from "../API/PostAPI";
import { PostObj } from "../API/Interfaces/PostInterfaces";
import './UserPost.css'

type UserProps = {
  data: PostObj[];
}

const UserPost: FC<UserProps> = ({data}: UserProps) => {
  // const [postData, setPostData] = useState<PostObj[]>();
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   PostAPI.getPosts()
  //     .then((response) => {
  //       setPostData(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

  return (
    <table className="table table-striped">
      <thead>Hello World</thead>
      <tbody>
        {data.map((postKey, index) => (
          <tr key={index}>
            <td>{postKey.subredditName}</td>
            <td>{postKey.postName}</td>
            <td>{postKey.description}</td>
          </tr>
          ))}
      </tbody>
    </table>
  );
};

export default UserPost;
