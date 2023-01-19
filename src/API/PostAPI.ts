import axios, { AxiosRequestConfig } from 'axios';

class PostAPI{
   apiPath = 'http://localhost:8080/api/posts/getAllPosts';
  //  const config: AxiosRequestConfig = {
  //    httpsAgent: new https.Agent({
  //      rejectUnauthorized: false
  //    }),
  //    headers: undefined
  //  }; 
  //   const response = await axios.get(`${apiPath}/${req.params.id}`, config);
  //   res.json(response.data);
    
  }

export default PostAPI;