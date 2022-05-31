import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

// function ReferDetail(props) {
//     console.log(props);
//   return (
//     <div>ReferDetail</div>
//   )
// }

function List({txt}){
    return (
        <li>{txt}</li>
    )
}

class ReferDetail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/reference");
        }

        this.mainAnimation();
    }

    mainAnimation(){
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
            gsap.to(".refer__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "sine.out"
            });
        }, 10);
    }

    render(){
        const {location} = this.props;
        console.log(location.state);

        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {
            return (
                <>
                    <Header/>
                    <Contents>
                        <section className='refer__cont'>
                            <div className='container'>
                                <div className="refer__inner">
                                    <div className="refer__table">
                                        <h3>{location.state.title}</h3>
                                        <div className="img_p_wrap">
                                            {location.state.image.length > 1 &&
                                                <img src={location.state.image} alt={location.state.title + "이미지"} />
                                            }
                                            <p>{location.state.desc2}</p>
                                        </div>
                                        <table className='table'>
                                            <colgroup>
                                                <col style={{width:'20%'}}/>
                                                <col style={{width:'80%'}}/>
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>특징</th>
                                                    <th>설명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>요소</th>
                                                    <td>{location.state.element}</td>
                                                </tr>
                                                <tr>
                                                    <th>닫는태그</th>
                                                    <td>{location.state.tag}</td>
                                                </tr>
                                                <tr>
                                                    <th>버전</th>
                                                    <td>{location.state.version}</td>
                                                </tr>
                                                <tr>
                                                    <th>시각적 표현</th>
                                                    <td>{location.state.view}</td>
                                                </tr>
                                                <tr>
                                                    <th>사용성</th>
                                                    <td>{location.state.use}</td>
                                                </tr>
                                                {/* {location.state.image.length > 1 &&
                                                    <tr>
                                                        <th>이미지</th>
                                                        <td><img src={location.state.image} alt={location.state.title + "이미지"} /></td>
                                                        <td>{}</td>
                                                    </tr>
                                                } */}
                                                {location.state.Definition.length > 1 &&
                                                    <tr>
                                                        <th>정의</th>
                                                        <td>
                                                            <ul>
                                                            {location.state.Definition.map((txt) => (
                                                                <List key={txt} txt={txt} />
                                                            ))}
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                }
                                                {location.state.Related.length > 1 &&
                                                    <tr>
                                                        <th>관계</th>
                                                        <td>
                                                            <ul>
                                                            {location.state.Related.map((txt) => (
                                                                <List key={txt} txt={txt} />
                                                            ))}
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                }
                                                {location.state.Accessibility.length > 1 &&
                                                    <tr>
                                                        <th>접근성</th>
                                                        <td>
                                                            <ul>
                                                            {location.state.Accessibility.map((txt) => (
                                                                <List key={txt} txt={txt} />
                                                            ))}
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                }
                                                {location.state.mdn.length > 1 || location.state.w3c.length > 1 ?
                                                    <tr>
                                                        <th>참고사이트2</th>
                                                        <td>
                                                            {location.state.mdn.length > 1 && <a href={location.state.mdn} target='_blank'>mdn</a>}
                                                            {location.state.w3c.length > 1 && <a href={location.state.w3c} target='_blank'>w3c</a>}
                                                        </td>
                                                    </tr>
                                                    : null
                                                }
                                                {/* <tr>
                                                    <th>참고사이트2</th>
                                                    <td>{location.state.mdn}, {location.state.w3c}</td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Contents>
                    <Footer/>
                </>
            )
        }
    }
}
export default ReferDetail