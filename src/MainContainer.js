import React, {useState, useEffect} from 'react';
import PostsContainer from './PostsContainer';
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
      <PostsContainer posts={posts} setPosts={setPosts} />
      <SubredditContainer setSubreddit={setSubreddit}/>
    </div>
  );
}

export default MainContainer;