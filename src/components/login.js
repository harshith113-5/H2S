import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
import login from './login.png';

export default function Login() {
    // const [action,setAction]=useState("Sign Up");
    // const history=useNavigate();

    // const [email,setEmail]=useState('')
    // const [password,setPassword]=useState('')

    // async function submit(e){
    //     e.preventDefault();

    //     try{

    //         await axios.post("http://localhost:8000/",{
    //             email,password
    //         })
    //         .then(res=>{
    //             if(res.data=="exist"){
    //                 history("/home",{state:{id:email}})
    //             }
    //             else if(res.data=="notexist"){
    //                 alert("User have not sign up")
    //             }
    //         })
    //         .catch(e=>{
    //             alert("wrong details")
    //             console.log(e);
    //         })

    //     }
    //     catch(e){
    //         console.log(e);

    //     }

    // }
  return (
    <div>
      <div className="main">
        <div className="log">
          <img src={login} alt="" />
        </div>
        <div className="form">
          <div className="det">
            <form action='../php.php' className="f_m">
              <h2 style={{ fontWeight: 'bold', fontSize: '32px' }}>Login</h2>
              <input type="text" placeholder="Email"/>
              <input type="password" required placeholder="Password"/>
              {/* <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}/> */}
              {/* <input type="password" required placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}/> */}
              <input type="submit" style={{height:'30px', padding:'0px'}}/>
              {/* <button type="submit" className={action==='Log In'?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Log In</button>
              <button type="submit" className={action==='Register'?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Register</button> */}

              {/* <a href="../views/signin.html">Register New User</a> */}
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        // body {
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   align-items: center;
        //   width: 98vw;
        // }
        // nav {
        //   width: 98vw;
        // }
        .main {
          width: 75vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .log {
          display: flex;
          align-items: center;
          height: 84vh;
          width: 500px;
        }
        .form {
          display: flex;
        }
        .form .det {
          align-items: center;
          justify-content: center;
          width: 500px;
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
        .form .det input {
          font-size: 15px;
          padding: 10px;
          height: 10px;
          width: 270px;
          border-radius: 10px;
          border: 1px solid black;
        }
        .f_m {
          justify-content: space-around;
          width: 300px;
          height: 300px;
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        button {
          border-radius: 50px;
          font-weight: bold;
          font-size: 15px;
          width: 120px;
          height: 34px;
          background-color: burlywood;
          border: none;
        }
      `}</style>
    </div>
  );
};
