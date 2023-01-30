import axios from "axios";
import { PostObj, PostCreateBody, LoginType, AuthenticationResponse, SubredditCreateBody } from "./Interfaces/PostInterfaces";

const API_BASE_URL = "http://localhost:8080/api";
const POST_API_REST_URL = API_BASE_URL + "/posts/getAllPosts";
const createPostURL = API_BASE_URL + "/posts/createPost";
const loginURL = API_BASE_URL + "/auth/login";
const createSubreddit = API_BASE_URL + "/api/subreddit/createSubreddit";

const configWithBearerToken = {
  headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
  },
};
class BackEndCall {
  logInToken(loginInfo: LoginType) {
    
    
    try {
        axios.post<AuthenticationResponse>(loginURL, loginInfo, configWithBearerToken).then((response) => {
            const bearerToken = response.data.authenticationToken;
            const refreshToken = response.data.refreshToken;
            localStorage.setItem('token', bearerToken);  
        })
    } catch (e) {
        alert(e);
    }

  }
  getPosts() {
    return axios.get<PostObj[]>(POST_API_REST_URL);
  }
  createPost(data: PostCreateBody) {
    const bearerToken = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      },
    };
    console.log(config)
    return axios.post<PostCreateBody>(createPostURL, data, config);
  }
  createSubreddit(data: SubredditCreateBody){
    return axios.post(createSubreddit, data, configWithBearerToken);
  }


}
export default new BackEndCall();
