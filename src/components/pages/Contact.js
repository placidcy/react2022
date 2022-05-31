import React from 'react';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ContactCont from "../includes/ContactCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Contact(){
//     return (
//         <>
//         <Header />
//         <Contents>
//             <ContactCont />
//         </Contents>
//         <Footer />
//         </>
//     )
// }

class Contact extends React.Component {
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
            gsap.to(".contact__inner > p:nth-child(1)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 1.2,
                ease: "sine.out"
            });
            gsap.to(".contact__inner > p:nth-child(2)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 1.6,
                ease: "sine.out"
            });
            gsap.to(".contact__inner > p:nth-child(3)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 2.0,
                ease: "sine.out"
            });
            gsap.to(".contact__inner > p:nth-child(4)", {
                duration: 0.6,
                opacity: 1,
                y: 0,
                delay: 2.4,
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
        document.querySelector("body").style.background = "#000";
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
                    <Loading />
                ) : (
                    <>
                    <Header />
                    <Contents>
                        <ContactCont />
                    </Contents>
                    <Footer />
                    </>
                )}
            </>
        )
    }
}
export default Contact;