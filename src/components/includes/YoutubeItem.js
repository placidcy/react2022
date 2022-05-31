import React from 'react'

function YoutubeItem(props) {
  return (
    <li>
        <a href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`} target='_blank'>
          <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
          <p className="title">{props.video.snippet.title}</p>
        </a>
    </li>
  )
}

export default YoutubeItem