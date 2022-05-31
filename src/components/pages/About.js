//js, jsx라고 써도됨
import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContTitle from '../layout/ContTitle';
import AboutCont from '../includes/AboutCont';
import Contact from '../layout/Contact';
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function About(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents color="light">
//                 <ContTitle title={["about","me"]} color="light"/>
//                 <AboutCont />
//             </Contents>
//             <Contact/>
//             <Footer color="light"/>
//         </>
//     )
// }
class About extends React.Component{
    state = {
        isLoading: true
    }

    mainAnimation = () => {
        setTimeout(()=>{
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
                delay: 1.4,
                ease: "sine.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "sine.out"
            });
            gsap.to(".about__cont", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 1.6,
                ease: "sine.out"
            });
        }, 10)
    }

    getSite = () => {
        setTimeout(() => {
            this.setState({isLoading:false});
            this.mainAnimation();
        }, 1600)
    }

    componentDidMount(){
        document.querySelector("body").style.background = "#f0eeeb";
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getSite();
        }, 3000)
    }

    render(){
        const {isLoading} = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents color="light">
                            <ContTitle title={["about","me"]} color="light"/>
                            <AboutCont />
                            <Contact/>
                        </Contents>
                        <Footer color="light"/>
                    </>
                )}
            </>
        )
    }

}
export default About;