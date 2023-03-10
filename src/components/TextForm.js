import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleUpLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        let newText = text.replace(text, '');
        setText(newText);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnchange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    
    // setText("New Text");
  return (
    <>
    <div className="conatiner">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
        <textarea className="form-control"  value = {text} onChange={handleOnchange} style = { {} } id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleUpLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={clearText}>Reset</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {
        text.split(" ").length} and {text.length} characters</p>
        <p> {0.008 * (text.split(" ").length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
