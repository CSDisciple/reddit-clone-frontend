import axios from "axios";
import { PostObj, PostCreateObj } from "./Interfaces/PostInterfaces";

const POST_API_REST_URL = "http://localhost:8080/api/posts/getAllPosts";
const createPostURL = "http://localhost:8080/api/posts/createPost";
//how do we do this without actually passing in the token?
const config = {
    headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzd29sZWtzIiwiaWF0IjoxNjc0NzAxMzAwLCJleHAiOjE2NzQ3MDEzOTB9.dZuP8olxE5sXIyNxikKTIJJ6yUprlbjdTa4SkNzG3L3eYovLwE0817bmzEibxxB2hcwgSR_Zxhyoieven6aMk8IKEUPjhI45arwYfy8YjfHToFW2mqzFrSq4MomkTHUcOxUviKaQFWr9PoRwyTTunbjbOOaM8c8ns20N3O4ZiRVgha6fklJ95flBQEUjVR7dHtriiZKL1GtgY-61dYxabfXH9eo_gPsOnGDSgG2hheEGpXvsxkD6dFr79LYlJUIWfZvZ3BOFh_56EoDaLjFhWaw_Pb0SlpgirdoU7RRGsPJZ4nmvMUfrdMh4P52JRotX6LD3UsdkoPBLkFFzf2JPTQ`
    }
}
class PostAPI {
  getPosts() {
    return axios.get<PostObj[]>(POST_API_REST_URL);
  }
  createPost(data: PostCreateObj) {
    return axios.post<PostCreateObj>(createPostURL, data, config);
    // headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
  }
}

export default new PostAPI();
