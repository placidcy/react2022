import React from "react";

//함수형 컴포넌트 + 클래스 컴포넌트 = 리액트 훅

function PortInfo({image, title, category, link, id}){
    return (
        <article className="port__item">
            <figure className="img">
                <a href={link}><img src={image} alt={`port0${id}`} /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>
    )
}

function PortCont({port}){
    return(
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                    {port.map((txt) => (
                        <PortInfo
                            key = {txt.id}
                            image = {txt.image}
                            title = {txt.title}
                            category = {txt.category}
                            link = {txt.link}
                            id = {txt.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PortCont;
