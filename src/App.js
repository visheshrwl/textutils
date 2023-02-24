import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
// import About from './components/About';

function App() {
  return (
    <>

        <Navbar title="Vishesh" aboutText="About Vishesh"/>
        <div className="container my-5">
        <TextForm heading="Enter the Text to Analyse below"/>
          {/* <About/> */}
        </div>
        
    </>
  );
}
export default App;