import React from "react";
// import ReactPlayer from 'react-player';
//import clip1 from "./clip.mp4";
import sample2 from "./sample2.png";
import sample from "./sample.png";
import output from "./output.png";
import unt from "./untitled.png";
import './clip.css'

export default function Clips(props) {
  return (
    <>
      <div className="imgs">
        <img
          src={output}
          alt=""
          width="500px"
          height="300px"
          style={{ margin: "0 30px", borderRadius: "50px", marginTop:'20px'}}
        />
        <img
          src={unt}
          alt=""
          width="500px"
          height="300px"
          style={{ margin: "0 30px", borderRadius: "50px", marginTop:'20px' }}
        />
      </div>
      <div>
        <video src="https://drive.google.com/file/d/1qOt-h9u3GaMU559E8KHz_QPmmS4-pM3C/view?usp=sharing" width="800" height="500" autoPlay muted loop />
      </div>
      <div className="imgs">
        <img
          src={sample2}
          alt=""
          width="500px"
          height="300px"
          style={{ margin: "0 30px", borderRadius: "50px" }}
        />
        <img
          src={sample}
          alt=""
          width="500px"
          height="300px"
          style={{ margin: "0 30px", borderRadius: "50px" }}
        />
      </div>
    </>
  );
}
