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
			<div id="comments-and-upvotes-container">
				<p className="comments-and-score-text">Comments: {props.post.num_comments}</p>
				<p className="comments-and-score-text">Upvotes: {props.post.score}</p>
			</div>
			
		</div>
	)
}

export default Post;