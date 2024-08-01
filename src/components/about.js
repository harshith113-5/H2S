import React from "react";
import { useState} from "react";
import './App.css';
import logoab from './logoab.png';
import { Link} from "react-router-dom";

export default function About(props) {
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
      {/* <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Global Farm Tours:
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
            Virtual Farm Visits: Explore a diverse range of successful
          agroecological farms across different regions and climates, including
          tropical, temperate, arid, and alpine environments.<br/> 360-Degree
          Environments: Experience realistic farm settings through high-quality
          360-degree video and interactive VR environments, allowing users to
          see how different agroecological practices are implemented in
          real-world scenarios.<br/> Dynamic Ecosystems: Witness the interactions
          between various components of the ecosystem, such as soil health,
          plant diversity, water management, and animal integration.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div> */}
      <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 style={{fontWeight:'bold'}}>Welcome to Agri EcoPath</h1>
          <p>Experience Farming Like Never Before</p>
          <a href="#mission" className="btn">Explore Now</a>
        </div>
        <img src={logoab} alt="vrimg" width="400" height="400" />
      </section>

      {/* Box Information Section */}
      <section id="boxinfo">
        <div className="container">
          <div className="box">
            <h2>Global Farm Tours</h2>
            <p>Experience various agroecological farms across diverse climates through 360-degree videos and VR, showcasing real-world practices and dynamic ecosystems.</p>
          </div>
          <div className="box">
            <h2>Interactive Learning Modules</h2>
            <p>Learn agroecological techniques through step-by-step guides, hands-on simulations, and quizzes that reinforce knowledge and track progress.</p>
          </div>
          <div className="box">
            <h2>Expert Interactions</h2>
            <p>Attend virtual sessions with agroecology experts, participate in live Q&As, and access mentorship programs for personalized guidance.</p>
          </div>
          <div className="box">
            <h2>Resource Library</h2>
            <p>Access a comprehensive database of articles, videos, and downloadable resources in multiple languages, supporting global agroecological learning.</p>
          </div>
          <div className="box">
            <h2>Educational Impact</h2>
            <p>Provides practical, hands-on knowledge about agroecological methods, enabling students to adopt sustainable practices effectively.</p>
          </div>
          <div className="box">
            <h2>Community Network</h2>
            <p>Join online forums, engage in social media, and collaborate on projects with a global community, fostering shared knowledge and innovation.</p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section id="mission" className="mission-vision">
        <h1 style={{fontWeight:'bold'}}>Our Mission & Vision</h1>
        <div className="content">
          <p>Our mission is to revolutionize the farming experience by bringing it to the digital world, allowing everyone to learn, engage, and participate in sustainable agriculture.</p>
          <p>Our vision is to create a global community of virtual farmers who are passionate about sustainability, innovation, and the future of agriculture.</p>
        </div>
      </section>

      {/* History and Timeline */}
      <section className="timeline">
        <h1 style={{fontWeight:'bold'}}>Our Journey</h1>
        <ul>
          <li>
            <div className="timeline-content">
              <h3>July-2024</h3>
              <p>Agri Eco Path was founded with a vision to merge technology and agriculture.</p>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <h3>August-2024</h3>
              <p>Developed the initial prototype of the virtual farming experience using A-Frame for web-based VR development.</p>
            </div>
          </li>
          {/* Add more timeline items as needed */}
        </ul>
      </section>

      {/* Team Section */}
      <section className="team">
        <h1 style={{fontWeight:'bold'}}>Meet the Team</h1>
        <div className="team-member">
          <div className="team-members">
            <h3>K Harshith</h3>
            <h3>U Hanishka</h3>
            <h3>S Maanasa</h3>
            <h3>P Rexbabu</h3>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h1 style={{fontWeight:'bold'}}>Join Our Virtual Farming Community</h1>
        <p>Get started with Agri Eco Path and be part of the future of farming.</p>
        {/* <button>
       
       </button> */}
        <a className="btn"><Link to="/User">
              Sign Up Now
            </Link></a>
      </section>
    </div>
    </>
  );
}
