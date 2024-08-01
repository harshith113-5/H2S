import React from "react";
import { useState } from 'react';
// import Typed from 'typed.js';
// import 'animate.css';
// import 'font-awesome/css/font-awesome.min.css';

export default function Contact(props) {
  const [constyle, setconstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setbtntext] = useState("Dark Mode");

  const dark = () => {
    if (constyle.color === "black") {
      setconstyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setbtntext("Light Mode");
    } else {
      setconstyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtntext("Dark Mode");
    }
  };

  return (
    <>
      <div>
        <h1 className={`text-${props.mode === "light" ? "#042743" : "light"}`}>
          Contact Us
        </h1>
        <p
          style={{ fontSize: "32px" }}
          className={`text-${props.mode === "light" ? "#042743" : "light"}`}
        >
          agriechotech@gmail.com
        </p>
      </div>
    </>
  );
}
