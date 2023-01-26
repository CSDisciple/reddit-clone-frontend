import React, { FC, useEffect, useState } from "react";
import BackEndCall from "../API/PostAPI";
import { PostObj } from "../API/Interfaces/PostInterfaces";
import "./UserPost.css";

type UserProps = {
  props: PostObj[];
};

const UserPost: FC<UserProps> = ({ props }: UserProps) => {
  const [post, setPost] = useState({
    subredditName: undefined,
    postName: undefined,
    url: undefined,
    description: undefined,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [event.target.name]: event.target.value });

    console.log(post);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    BackEndCall.createPost(post)
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
          <label htmlFor="subredditName">Subreddit Name</label>
          <input
            type="text"
            className="form-control"
            id="subredditName"
            aria-describedby="emailHelp"
            placeholder="Enter subreddit name"
            name="subredditName"
            value={post.subredditName}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="postName">Post Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter post name"
            name="postName"
            id="postName"
            value={post.postName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter url"
            name="url"
            id="url"
            value={post.url}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Description"
            name="description"
            value={post.description}
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
