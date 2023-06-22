
import React from "react";
// import "./card.css"

function Card({title,image,rating}){
    return(
        <div className="parrent-pic">
        <div className="head-name">
        <h1>{title}</h1>
        <h4>{rating}</h4>
            <img style={{width: '280px',height:'400px'}}
            className="img-move"
            src={image}
             alt="error" />
        </div>
      
    </div>
    );
}

export default Card;