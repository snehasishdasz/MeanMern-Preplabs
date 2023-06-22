import React, { useState } from "react";
import "./Card.css";
import "../App";
export const Card = ({
  title,
  url,
  thumbnailUrl,
  handleupdate,
  deletehandle,
}) => {
  console.log(title);
  console.log(url);
  // const[change,setChange] = useState([]);
  // const handleclick=()=>{
  //     setChange([
  //         1,2,3,4
  //     ]
  //     );
  // }
  // console.log(change);
  return (
    <div className="card">
      {/* { change==="" ?<h1>Card</h1>:<h1>Card selected</h1>}
        <button className='btn' onClick={handleclick}>Click me!!</button> */}
      <img src={url} alt="" className="image" />
      <p className="title">{title}</p>
      <h3>{thumbnailUrl}</h3>
      <div className="btnn">
        <button id="btn1" onClick={handleupdate}>
          update
        </button>

        <button id="btn2" onClick={deletehandle}>
          delete
        </button>
      </div>
    </div>
  );
};
