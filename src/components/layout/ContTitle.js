import React from 'react'

function ContTitle({title, color}) {
  return (
    // `cont__title ${props.title[0]}`
    // <section className={"cont__title " + color}>
    <section className={"cont__title " + color}>
        <div className="container">
            <h1>
                <strong>{title[0]}</strong>
                <em>{title[1]}</em>
            </h1>
        </div>
    </section>
  )
}

export default ContTitle