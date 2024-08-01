import React from 'react'
import { Link} from "react-router-dom";
import './vr.css';
import vr from './vr.png'
// import clip from './comp';

export default function Vr(props) {
  return (
    <>
    <div className="main">
        {/* <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum accusamus adipisci nobis sit doloremque et voluptatem tenetur quisquam, temporibus velit quos architecto vitae quas unde pariatur itaque enim eaque facere at ullam rerum modi sunt. Quibusdam molestiae vero eum voluptas rem quo quia similique, eius ullam, neque laudantium labore!</p> */}
        <div className="in">
            <a className="btn"><Link to="/Clip">
                Let's dive into the fields
                </Link></a>
        </div>
        <div className="img">
            <img src={vr} style={{height:'68vh'}}/>
        </div>
        
    </div>
    </>
  )
}