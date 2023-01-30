import React, { FC, useEffect, useState } from "react";
import BackEndCall from "../API/PostSubredditAPI";
import { PostObj } from "../API/Interfaces/PostInterfaces";
import PostAPI from "../API/PostSubredditAPI";
import "./UserPost.css";

type UserProps = {
  props: PostObj[];
};

const UserPost: FC = () => {
  const [postData, setPostData] = useState<PostObj[]>([]);
  const [error, setError] = useState(null);
  const [post, setPost] = useState({
    subredditName: undefined,
    postName: undefined,
    url: undefined,
    description: undefined,
  });

  useEffect(() => {
    PostAPI.getPosts()
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value }; //this is better
    });
    //setPost({ ...post, [event.target.name]: event.target.value }); this is not an ideal way to set the state when we depend on a prev state
  };

  const handleCreatePostSubmit = (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    BackEndCall.createPost(post)
      .then((response) => {
        alert("Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle user input and create a post request data object
  return (
    <div>
      <form onSubmit={handleCreatePostSubmit}>
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table table-striped">
        <tbody>
          {postData.map((postKey, index) => (
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
