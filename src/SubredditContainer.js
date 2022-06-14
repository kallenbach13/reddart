import React from 'react';

const SubredditContainer = (props) => {
    return (
        <div id="subreddits-container" class="sticky-top">    
            <h2 id="subreddits-list-title">Subreddits</h2>

            <ul id="subreddits-list">

                <button className='btn' name='Art' value='art' onClick={e => props.setSubreddit(e.target.value)}> 
                    Art
                </button>

                <button className='btn' name='Pixel-Art' value='pixelart' onClick={e => props.setSubreddit(e.target.value)}> 
                    Pixel Art
                </button>

                <button className='btn' name='Watercolor' value='watercolor' onClick={e => props.setSubreddit(e.target.value)}> 
                    Watercolor
                </button>

                <button className='btn' name='Analog' value='analog' onClick={e => props.setSubreddit(e.target.value)}> 
                    Analog
                </button>

                <button className='btn' name='Graffiti' value='graffiti' onClick={e => props.setSubreddit(e.target.value)}> 
                    Graffiti
                </button>

                <button className='btn' name='Sculpture' value='sculpture' onClick={e => props.setSubreddit(e.target.value)}> 
                    Sculpture
                </button>

                <button className='btn' name='Oil-Painting' value='oilpainting' onClick={e => props.setSubreddit(e.target.value)}> 
                    Oil Painting
                </button>

        </ul>

      </div>
    )
}

export default SubredditContainer;