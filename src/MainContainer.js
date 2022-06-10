import React from 'react';
import PostsList from '.PostsList.js'
import SubredditsList from '.SubredditsList.js'

const MainContainer = () => {
  return (
    <div id="main-container">    
      <PostsList />
      <SubredditsList />
    </div>
  );
}

export default MainContainer;