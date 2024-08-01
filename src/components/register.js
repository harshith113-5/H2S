// import React, { useEffect, useState } from "react"
// import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import php from './php.php';
// import register from "../components copy/register";


export default function Register(props) {

    return (
        <div className="login">

            <h1>Signup</h1>

            <form action={php} style={{display:'flex', flexDirection:'column', padding:'20px', margin:'20px'}}>
                <input type="email" placeholder="Email" style={{margin:'20px',padding:'8px'}}/>
                <input type="password" placeholder="Password"style={{margin:'20px',padding:'8px'}} />
                <input type="submit" style={{margin:'20px'}}/>

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/Login">Login Page</Link>

        </div>
    )
}
