import React, {useState, useEffect} from 'react';
import PostsList from './PostsList'
import SubredditsList from './SubredditsList';
import Post from './Post';

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

      <div id="posts-container">    
        <h2 id="posts-list-title">Posts</h2>

        <div className="row">
            {
            (posts != null) ? posts.map((post, index) => 
            <Post key={index} post={post.data} />) : ""
          }
        </div>
      </div>

      <div id="subreddits-container">    
        <h2 id="subreddits-list-title">Subreddits</h2>

        <ul id="subreddits-list">

          <button className='btn' name='Pixel-Art' value='art' onClick={e => setSubreddit(e.target.value)}> 
            Art
          </button>

          <button className='btn' name='Pixel-Art' value='pixelart' onClick={e => setSubreddit(e.target.value)}> 
            Pixel Art
          </button>

          <button className='btn' name='Watercolor' value='watercolor' onClick={e => setSubreddit(e.target.value)}> 
            Watercolor
          </button>

          <button className='btn' name='Analog' value='analog' onClick={e => setSubreddit(e.target.value)}> 
            Analog
          </button>

          <button className='btn' name='Graffiti' value='graffiti' onClick={e => setSubreddit(e.target.value)}> 
            Graffiti
          </button>

          <button className='btn' name='Sculpture' value='sculpture' onClick={e => setSubreddit(e.target.value)}> 
            Sculpture
          </button>

          <button className='btn' name='Oil-Painting' value='oilpainting' onClick={e => setSubreddit(e.target.value)}> 
            Oil Painting
          </button>

        </ul>

      </div>
    </div>
  );
}

export default MainContainer;