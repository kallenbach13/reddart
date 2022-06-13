import React from 'react';

function shortenSelfText(text, limit) {
	const short = text.indexOf(' ', limit);
	if(short === -1) return text;
	return text.substring(0, short);
}


function Post(props) {

	let image = props.post.url

	return(

		<div className="col-sm-3 post-card">
			<h3>{props.post.title}</h3>
			<img src={image} alt=" "/>
			<p>{shortenSelfText(props.post.selftext, 100)}</p>
			<a href={"https://reddit.com" + props.post.permalink} target='_blank' rel="noreferrer" class="btn">
				Go to Reddit link
			</a>
			<hr>
			</hr>
			<span class="author">Author: {props.post.author} &nbsp; &nbsp; Comments: {props.post.num_comments}</span>
			<span class="score">Score: {props.post.score}</span>
		

		</div>
	)
}

export default Post;