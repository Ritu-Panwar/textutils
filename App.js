import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showalert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const togglemode = () => {
    if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = '#374145';
        showalert("DarkMode has been Enabled", "success");
        // document.title='TextUtils- DarkMode is Enable';
        // setInterval(() => {
        //   document.title='TextUtils- DarkMode';
        // }, 2000);
        // setInterval(() => {
        //   document.title='TextUtils- LightMode';
        // }, 1500);
      }
      else{
        setMode('light');
         document.body.style.backgroundColor = 'white';
         showalert("LightMode has been Enabled", "success");
        //  document.title='TextUtils- LightMode is Enable';
      }
  }

  return (
    <> 
    <Navbar title="TextUtils" about="About Us" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert} />
    <Router>
      <div className="container">
      <Routes>
        {/* /users --> component1
        /users/home --> component2 */}
      <Route exact path="/about" element={<About mode="Dark"/>}/>
      <Route exact path="/" element={<TextForm heading="Try TextUtils- Word Counter, Character Counter, LowerCase to Uppercase, UpperCase to LowerCase, Remove ExtraSpaces" mode={mode} showalert={showalert}/>}/>   
      </Routes>
   </div>
    </Router>
    </>
  );
}

export default App;
