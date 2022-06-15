import React from 'react';

const SubredditContainer = (props) => {
    return (
        <div id="subreddits-container" class="sticky-top">

            <h2 id="subreddits-title">Subreddits</h2>

            <div id="subreddits-list">

                <button className='btn subreddit-button' id="art-button" name='art' value='art' onClick={e => props.setSubreddit(e.target.value)}> 
                    Art
                </button>

                <button className='btn subreddit-button' id="pixelart-button" name='pixelart' value='pixelart' onClick={e => props.setSubreddit(e.target.value)}> 
                    Pixel Art
                </button>

                <button className='btn subreddit-button' id="watercolor-button" name='watercolor' value='watercolor' onClick={e => props.setSubreddit(e.target.value)}> 
                    Watercolor
                </button>

                <button className='btn subreddit-button' id="analog-button" name='analog' value='analog' onClick={e => props.setSubreddit(e.target.value)}> 
                    Analog
                </button>

                <button className='btn subreddit-button' id="graffiti-button" name='graffiti' value='graffiti' onClick={e => props.setSubreddit(e.target.value)}> 
                    Graffiti
                </button>

                <button className='btn subreddit-button' id="sculpture-button" name='scultpture' value='sculpture' onClick={e => props.setSubreddit(e.target.value)}> 
                    Sculpture
                </button>

                <button className='btn subreddit-button' id="oilpainting-button" name='oilpainting' value='oilpainting' onClick={e => props.setSubreddit(e.target.value)}> 
                    Oil Painting
                </button>

        </div>

      </div>
    )
}

export default SubredditContainer;