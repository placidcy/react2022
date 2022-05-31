import React from 'react'

function MovieItem(props){
    return (
        <li className='movieList'>
            <a href={`https://www.themoviedb.org/movie/${props.item.id}-${props.item.title}`}>
            {props.item.poster_path ?
                <div className="listWrap">
                    <img src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`} alt={props.item.original_title} />
                    <p className='title'>{props.item.original_title}</p>
                </div>
                : null
            }
            </a>
        </li>
    )
}

function MovieList(props) {
    console.log(props.list)
    return (
        <div className='movie__list'>
            <ul>
                {props.list.map((item,index) => (
                    <MovieItem 
                        key={index}
                        item={item}
                        />
                ))}
            </ul>
        </div>
      )
}

export default MovieList