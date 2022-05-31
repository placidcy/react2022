import React from "react";

//함수형 컨퍼넌트 ++클래스 컨퍼넌트-->리액트 훅

function MainInfo({text}){
    return <div>{text}</div>
}

const mainText = [
    {text : "WE PROVIDE"},
    {text : "VISUAL CODING"},
    {text : "SOLUTIONS"},
    {text : "FOR YOU WEBS"}
]

function MainCont(){
    return(
        <section className="main__cont">
            <div className="main__inner">
                    {mainText.map((txt,i) => (
                        <MainInfo text={txt.text} key={i}/>
                    ))}
            </div>
        </section>
    )
}

export default MainCont;
