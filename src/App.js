import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React, {useState} from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>

        <Navbar title="Vishesh" aboutText="About Vishesh" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-5">
        <TextForm heading="Enter the Text to Analyse below" mode = {}/>
          {/* <About/> */}
        </div>
        
    </>
  );
}
export default App;