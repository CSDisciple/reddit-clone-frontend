import axios from "axios";
import { PostObj, PostCreateObj, LoginType, AuthenticationResponse } from "./Interfaces/PostInterfaces";
import Login from "../components/Login";

const POST_API_REST_URL = "http://localhost:8080/api/posts/getAllPosts";
const createPostURL = "http://localhost:8080/api/posts/createPost";
const loginURL = "http://localhost:8080/api/auth/login";
let bearerToken: string;
let refreshToken;
//how do we do this without actually passing in the token?

const configTwo = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
class BackEndCall {
  getPosts() {
    return axios.get<PostObj[]>(POST_API_REST_URL);
  }
  createPost(data: PostCreateObj) {
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    };
    return axios.post<PostCreateObj>(createPostURL, data, config);
  }
  login(loginInfo: LoginType) {
    let isLoggedIn = false;
    axios.post<AuthenticationResponse>(loginURL, loginInfo, configTwo).then((response) => {

      const loginInfo = response.data;
      bearerToken = loginInfo.authenticationToken;
      refreshToken = loginInfo.refreshToken;

    })
    if (bearerToken !== null) {
      isLoggedIn = true;
    }
    return isLoggedIn;
  }

}
export default new BackEndCall();
