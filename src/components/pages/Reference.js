import React from 'react';
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContTitle from '../layout/ContTitle';
import Contact from '../layout/Contact';
import { gsap } from "gsap";
import axios from 'axios';
import Loading from "../basics/Loading";
import ReferCont from "../includes/ReferCont";
// import ReferenceCont from '../includes/ReferenceCont';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
    }

    mainAnimation = () => {
        setTimeout(() => {
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
            gsap.to(".refer__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "sine.out"
            });
        }, 10);
    }

    getRefers = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await  axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");
    
        this.setState({ refers: htmlRefer, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount(){
        // document.querySelector("body").style.background = "#f0eeeb";
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getRefers();
        },2000);
    }

    render(){
        const {isLoading, refers} = this.state;
        console.log(refers)
        return(
            <>
                {isLoading ? (
                    <Loading color="black"/>
                ) : (
                    <>
                        <Header/>
                        <Contents>
                            <ContTitle title={["reference","site"]}/>
                            <section className='refer__cont'>
                                <div className='container'>
                                    <div className="refer__inner">
                                        <h2>CSS</h2>
                                        <ul className='refer__list'>
                                            {refers.map((refer) => (
                                                <ReferCont
                                                    key = {refer.id}
                                                    id = {refer.id}
                                                    title = {refer.title}
                                                    desc = {refer.desc}
                                                    use = {refer.use}

                                                    desc2 = {refer.desc2}
                                                    element = {refer.element}
                                                    tag = {refer.tag}
                                                    version = {refer.version}
                                                    view = {refer.view}
                                                    image = {refer.image}
                                                    link = {refer.link}
                                                    Definition = {refer.Definition}
                                                    Related = {refer.Related}
                                                    Accessibility = {refer.Accessibility}
                                                    mdn = {refer.mdn}
                                                    w3c = {refer.w3c}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}
export default Reference;