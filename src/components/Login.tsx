import { useState } from "react";
import PostSubredditAPI from "../API/PostSubredditAPI";
import "./Login.css";

const Login = () => {
  let loginToken;
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "swoleks",
    password: "unityGod123",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserLoginInfo({
      ...userLoginInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      loginToken = PostSubredditAPI.logInToken(userLoginInfo);
    } catch (e: any) {
      alert(e.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="userName"
          className="form-control"
          id="userName"
          aria-describedby="emailHelp"
          placeholder="Enter your user name"
          name="userName"
          value={userLoginInfo.username}
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          name="password"
          value={userLoginInfo.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
