import React, {useState, useEffect} from 'react';
import PostsList from './PostsList'
import SubredditsList from './SubredditsList';

const MainContainer = () => {

  return (
    <div id="main-container">    
      <PostsList/>
      <SubredditsList/>
    </div>
  );
}

export default MainContainer;