import React, { useEffect, useState } from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from '../layout/ContTitle';
import Contact from '../layout/Contact';
import Footer from "../layout/Footer"
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from "../includes/YoutubeSearch";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

//require('dotenv').config() //npm i dotenv

function Youtube() {
    const [videos, setVideos] = useState([]);   //오른쪽에 있는 값을 왼쪽에서 불러오기 가능

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
            gsap.to(".youtube__list", {
                duration: 0.5,
                y: 0,
                opacity: 1,
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
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${query}&key=${process.env.YOUTUBE_API_KEY}`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }

    //값이 바뀔때마다 감지
    useEffect(() => { 
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=linkinpark&key=${process.env.YOUTUBE_API_KEY}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items);
                mainAnimation();
            })
            .catch(error => console.log('error', error));
    }, []);
    return (
    <>
        <Loading />
        <Header />
        <Contents>
            <ContTitle title={["Youtube","reference"]}/>
            <section className="youtube__cont">
                <div className="container">
                    <div className="youtube__inner">
                        <YoutubeSearch onSearch={search}/>
                        <YoutubeList videos={videos}/>
                    </div>
                </div>
            </section>
            <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Youtube