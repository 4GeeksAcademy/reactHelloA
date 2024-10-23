import React from "react"

const Button = (props) => {


    return (
        <div>
            <a href={props.url} type="button" className="btn btn-primary">
                {props.text} 
                </a>
        </div>


    )
}
export default Button 