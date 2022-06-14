import React from 'react';

function shortenSelfText(text, limit) {
	const short = text.indexOf(' ', limit);
	if(short === -1) return text;
	return text.substring(0, short);
}

// Might add a shortenTitle function as well in the future. Some of the post titles on Reddit can get a bit longwinded.

/*<hr>
</hr>
<a href={"https://reddit.com" + props.post.permalink} target='_blank' rel="noreferrer" class="btn">
	Go to Reddit link
</a>
<hr>
</hr>
*/


function Post(props) {

	let image = props.post.url

	return(

		<div className="col-sm-3 post-card" onClick={()=> window.open("https://reddit.com" + props.post.permalink, "_blank")}>
			<h3>{props.post.title}</h3>
			<p>Posted by {props.post.author}</p>
			<img src={image} className="image-item" alt=" "/>
			<p>{shortenSelfText(props.post.selftext, 100)}</p>
			<div id="comments-and-upvotes-container">
				<p>Comments: {props.post.num_comments}</p>
				<p>Upvotes: {props.post.score}</p>
			</div>
			
		</div>
	)
}

export default Post;