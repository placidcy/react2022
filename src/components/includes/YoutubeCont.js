import React from 'react'
// import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeList from '../includes/YoutubeList';

function YoutubeCont({list}) {
  return (
    <section className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          {/* <YoutubeSearch /> */}
          <YoutubeList items={list}/>
        </div>
      </div>
    </section>
  )
}

export default YoutubeCont