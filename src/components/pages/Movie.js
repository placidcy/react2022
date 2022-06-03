import React, { useEffect, useState } from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from "../layout/ContTitle";
import MovieCont from "../includes/MovieCont";
import Contact from '../layout/Contact';
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import YoutubeSearch from "../includes/YoutubeSearch";

// function Script(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents color="light">
//                 <ContTitle title={["script","javascript"]} color="light"/>
//                 <ScriptCont />
//             </Contents>
//             <Contact />
//             <Footer color="light"/>
//         </>
//     )
// }

function Movie(){
    const [videos, setVideos] = useState([]);

    const mainAnimation = () => {
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.4
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1,
                ease: "sine.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "sine.out"
            });
            gsap.to(".youtube__search", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "sine.out"
            });
            gsap.to(".movie__inner", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 1.9,
                ease: "sine.out"
            });
        },2000)
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${query}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.results))
            .catch(error => console.log('error', error));
    }

    useEffect(() => { //값이 바뀔때마다 감지
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=fear`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.results)
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <Loading color="light"/>
            <Header color="light"/>
            <Contents color="light">
                <ContTitle title={["Movie","reference"]} color="light"/>
                <YoutubeSearch onSearch={search} color="light"/>
                <MovieCont list={videos}/>
                <Contact />
            </Contents>
            <Footer color="light"/>
        </>
      )
}
export default Movie;