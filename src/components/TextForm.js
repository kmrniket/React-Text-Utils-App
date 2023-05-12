import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    //setText("new text");
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")

    }
    const handleOnChange = (event) =>{
        //console.log("On Change");
        setText(event.target.value);
    }
    const handleClearText = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text has been cleared", "success")

    }
  return (
    <>
    <div className='container' style= {{color: props.mode==='dark'?'white':'dark'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
        color: props.mode==='dark'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className = "btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2"onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-3" style= {{color: props.mode==='dark'?'white':'dark'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>This will take {0.008*text.length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
