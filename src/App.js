import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
        setAlert({             //alert is an object
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")
    } 
  }

  return (
  <>
{/* <Navbar title = "TextUtils" aboutText = "About the App"/> */}
<Navbar title = "TextUtils" mode={mode} toggleMode ={toggleMode} />
<Alert alert = {alert} />
{/* <Navbar/> */}
<div className="container my-3">
<TextForm showAlert = {showAlert} heading = "Enter the Text to Analyze Below"/>
{/* <About/> */}
</div>
</>
  );
}

export default App;
