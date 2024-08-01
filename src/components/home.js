import React from "react";
import logo1 from "../components/logo1.png";
import "./tf.css";

const AgriEcopath = () => {
  return (
    <>
      <div className="contsiner" style={styles.container}>
        <helmet>
          {/* <link rel="icon" href={logo1} type="image/icon" /> */}
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
          <title>Agri-Ecopath</title>
        </helmet>
        <div style={styles.grad1}>
          <div style={styles.grad2}>
            <div className="main" style={styles.main}>
              <div className="img" style={styles.img}>
                <img
                  src={logo1}
                  alt=""
                  style={{
                    width: "650px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                />
              </div>
              <div className="content" style={styles.content}>
                <div className="con">
                  <h1 style={styles.h1}>AGRI-ECOPATH</h1>
                  <h5 style={styles.h5}>
                    Virtual Farming: Bridging Innovation and Tradition
                  </h5>
                  <h2 style={styles.h2}>
                    E D U C A T E - I N N O V A T
                    E - S U S T A I N
                  </h2>
                </div>
                <div style={styles.homeSci}>
                  <br />
                  <br />
                  <a
                    href="mailto:harshithkompala00@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                  >
                    <i className="bx bx-envelope"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harshith-k-816664284/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/harshith113-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    margin: '0',
    padding:'0',
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    // backgroundImage: "linear-gradient(to left, green, black 60%)",
    // backgroundRepeat: 'no-repeat',

    //  center center fixed',
    backgroundSize: 'fill'
  },
  grad1: {
    // margin: '-20px',
    // height: '100vh',
    
  },
  // grad2: {
  //   height: '100%',
  //   backgroundImage: 'url("../comp/logo1.png")',
  //   backgroundPosition: 'left',
  //   backgroundSize: '650px 650px',
  //   backgroundRepeat: 'no-repeat'
  // },
  h1: {
    textAlign: "center",
    fontFamily: "Perpetua Titling MT",
    fontSize: "1.8cm",
    color: "gold",
    textShadow: "5px 5px 10px black",
  },
  h5: {
    textAlign: "center",
    fontFamily: "Verdana",
    fontSize: "0.6cm",
    color: "gold",
    textShadow: "5px 5px 2px black",
  },
  h2: {
    textAlign: "center",
    fontFamily: "PMingLiU-ExtB",
    fontSize: "0.5cm",
    color: "white",
    textShadow: "5px 5px 1px black",
  },
  homeSci: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // transform: 'translateX(800px)',
  },

  main: {
    display: "flex",
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: "space-around",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default AgriEcopath;