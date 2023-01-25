import axios from 'axios';

const POST_API_REST_URL = "http://localhost:8080/api/posts/getAllPosts";
export interface PostObj {
    "id": number,
    "postName": string,
    "url": string,
    "description": string,
    "userName": string,
    "subredditName": string,
    "voteCount": number,
    "commentCount": number,
    "duration": string,
    "upVote": boolean,
    "downVote": boolean
}
class PostAPI {
    
    getPosts(){
        return axios.get<PostObj[]>(POST_API_REST_URL);
    }

}

export default new PostAPI();