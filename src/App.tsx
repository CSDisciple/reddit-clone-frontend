import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPost from './components/UserPost';
import {PostObj} from './API/Interfaces/PostInterfaces'
import PostAPI from './API/PostAPI';
function App() {
  const [postData, setPostData] = useState<PostObj[]>([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    PostAPI.getPosts()
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
     error ? error : <UserPost data = {postData}/>
  );
}

export default App;
