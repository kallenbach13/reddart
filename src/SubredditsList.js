import React, {useState, useEffect} from 'react';

const SubredditsList = () => {
    return (
      <div id="subreddits-container">    
        <h2 id="subreddits-list-title">Subreddits</h2>

        <ul id="subreddits-list">
            <button className='btn' name='Pixel-Art' value='Pixel-Art'> 
              Pixel Art
            </button>

            <button className='btn' name='Watercolor' value='Watercolor'> 
              Watercolor
            </button>

            <button className='btn' name='Analog' value='Analog'> 
              Analog
            </button>

            <button className='btn' name='Graffiti' value='Graffiti'> 
              Graffiti
            </button>

            <button className='btn' name='Sculpture' value='Sculpture'> 
              Sculpture
            </button>

            <button className='btn' name='Oil-Painting' value='Oil-Painting'> 
              Oil Painting
            </button>
        </ul>

      </div>
    );
  }

export default SubredditsList;