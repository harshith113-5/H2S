import './App.css';
import Navbar from './components/6.Navbar.js';
import AgriEcopath from './components/home.js';
import React,{useState} from 'react';
import About from './components/about.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/contact.js';
import Vr from './components/vr.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Clips from './components/clips.js';
// import clips from './components/clips.js';


function App() {
  const [mode,setMode]=useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(msg,type)=>
  {
    setalert({
      message:msg,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Darkmode has been enabled Successfully");
      document.title='AgriEcoPath-DarkMode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled Successfully");
      document.title='AgriEcoPath-LightMode';
    }
  }
  return (
      <Router>
          <Navbar title="AgroEchoPath" mode={mode} toggleMode={toggleMode}/>
          {/* <Alert alert={alert}/> */}
        <div className="container">
          <Routes>
            <Route exact path="/Contact" element={<Contact mode={mode}/>}>
              {/* <Contact/> */}
            </Route>
            <Route exact path="/Clip" element={<Clips mode={mode}/>}>
              {/* <Contact/> */}
            </Route>
            <Route exact path="/User" element={<Login mode={mode}/>}>
              {/* <User/> */}
            </Route>
            <Route exact path='/sign' element={<Register mode={mode}/>}>
              {/* <Sign/> */}
            </Route>
            <Route exact path="/Vr" element={<Vr mode={mode}/>}>
              {/* <Vr/> */}
            </Route>
            <Route  exact path="/about" element={<About mode={mode}/>}>
              {/* <About/> */}
            </Route>
            <Route exact path="/" element={<AgriEcopath mode={mode}/>}>
              {/* <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/> */}
            </Route>
            <Route exact path="/home" element={<AgriEcopath/>}>
              {/* <TextForm heading="Enter the Text" mode={mode} showAlert={showAlert}/> */}
            </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;