import React, {useState, useEffect} from 'react';
import Post from './Post';
import SubredditContainer from './SubredditContainer';

const MainContainer = () => {

  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState('art');

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +"/.json").then (res => {
      if (res.status !== 200) {
        console.log("Apologies. There was an error.");
        return;
      }
      res.json().then(data => {
        if (data != null) {
          setPosts(data.data.children);}
      })
    })
  }, [subreddit]);

  return (
    <div id="main-container">

      <div className="row" id="posts-container">
        {
          (posts != null) ? posts.map((post, index) => 
          <Post key={index} post={post.data} />) : ""
        }
        </div>

    <SubredditContainer setSubreddit={setSubreddit}/>
    </div>
  );
}

export default MainContainer;