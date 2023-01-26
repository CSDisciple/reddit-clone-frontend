import React, { FC, useEffect, useState } from "react";
import PostAPI from "../API/PostAPI";
import { PostCreateObj, PostObj } from "../API/Interfaces/PostInterfaces";
import "./UserPost.css";

type UserProps = {
  props: PostObj[];
};
let createData: PostCreateObj = {
  subredditName: undefined ,
  postName: undefined,
  url: undefined,
  description: undefined,
};
const UserPost: FC<UserProps> = ({ props }: UserProps) => {
  const [inputVal, setInputVal] = useState<PostCreateObj>(createData);
  const [subredditName, setSubredditName] = useState<string>();
  const [postName, setPostName] = useState<string>();
  const [url, setUrl] = useState<string>();
  const [description, setDescription] = useState<string>();
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal({ ...inputVal, [event.target.name]: event.target.value });

    console.log(inputVal)
  };
  const dataObject: PostCreateObj = {
    subredditName: subredditName,
    postName: postName,
    url: url,
    description: description,
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    PostAPI.createPost(inputVal)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle user input and create a post request data object
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Subreddit Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter subreddit name"
            name="subredditName"
            value={subredditName}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Post Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter post name"
            name="postName"
            value={postName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">URL</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter url"
            name="url"
            value={url}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Description"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table table-striped">
        <thead>Hello World</thead>
        <tbody>
          {props.map((postKey, index) => (
            <tr key={index}>
              <td>{postKey.subredditName}</td>
              <td>{postKey.postName}</td>
              <td>{postKey.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPost;
