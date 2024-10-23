import React from "react"

const Card = (props) => {


    return (
        // <div>
        //     <div className="cards">
        //         <div className="row row-cols-1 row-cols-md-3 g-4">
        //             <div className="col-lg-3 col-md-6 col-sm-12">
        //                 <div className="card h-100">
        //                     <img src={props.src} className="card-img-top" alt="..." />
        //                     <div className="card-body">
        //                         <h5 className="card-title">{props.title}</h5>
        //                         <p className="card-text">{props.text}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        // <div className=" card h-100">
        //     <img src={props.src} className="card-img-top" alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{props.title}</h5>
        //         <p className="card-text">{props.text}</p>
        //     </div>
        // </div>
<div className="card" style={{"width": "18rem"}}>
<img src={props.src} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      



    )
}
export default Card 