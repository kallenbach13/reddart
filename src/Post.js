import React from 'react';

const shortenText = (text, limit) => {
	const short = text.indexOf(' ', limit);
	if(short === -1) return text;
	return text.substring(0, short) + "...";
}

// Might add a shortenTitle function as well in the future. Some of the post titles on Reddit can get a bit longwinded.


function Post(props) {

	let image = props.post.url

	return(

		<div className="col-sm-3 post-card" onClick={()=> window.open("https://reddit.com" + props.post.permalink, "_blank")}>
			<h3 className="post-title">{shortenText(props.post.title, 30)}</h3>
			<p className="author-text">Posted by {props.post.author}</p>
			<img src={image} className="image-item" alt=" "/>
			<p>{shortenText(props.post.selftext, 100)}</p>
			<div id="comments-and-score-container">
				<div id="score-container">
					<img src={require("./assets/upvote.png")} className="comments-and-score-images" alt=" "></img>
					<p className="comments-and-score-text">{props.post.score}</p>
				</div>
				<div id="comments-container">
					<img src={require("./assets/comment-box.png")} className="comments-and-score-images" alt=" "></img>
					<p className="comments-and-score-text">{props.post.num_comments}</p>
				</div>
			</div>
			
			
		</div>
	)
}

export default Post;