import Post from './Post';

const PostsContainer = (props) => {
    return (
          <div className="row" id="posts-container">
            {
              (props.posts != null) ? props.posts.map((post, index) => 
              <Post key={index} post={post.data} />) : ""
            }
            </div>
      );
}

export default PostsContainer;