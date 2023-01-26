import axios from 'axios';
import { PostObj } from './Interfaces/PostInterfaces';

const POST_API_REST_URL = "http://localhost:8080/api/posts/getAllPosts";

class PostAPI {
    
    
    getPosts(){
        return axios.get<PostObj[]>(POST_API_REST_URL);
    }

}

export default new PostAPI();