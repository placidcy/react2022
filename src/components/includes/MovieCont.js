import React from 'react'
import MovieList from '../includes/MovieList';

function MovieCont(props) {
  return (
    <section className="movie__cont">
      <div className="container">
        <div className="movie__inner">
          {/* {movieData.map((txt,i) => (
            <MovieInfo
              key = {i}
              image = {txt.image}
              alt = {txt.alt}
              title = {txt.title}
              textL = {txt.textL}
              textR = {txt.textR}
            />
          ))} */}
          <MovieList list={props.list}/>
        </div>
      </div>
    </section>
  )
}

export default MovieCont