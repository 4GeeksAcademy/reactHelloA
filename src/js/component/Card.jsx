import React from "react"

const Card = (props) => {


    return (
<div className="card" style={{"width": "18rem", "height" : "28rem"}}>
<img src={props.src} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{props.text}</p>
    <a  href={props.url} className="btn btn-primary">{props.info}</a>

  </div>
</div>
      



    )
}
export default Card 