import React, { useState } from 'react';

export default function Textform(props) {
    const handle1 = () => {
        console.log("UpperCase was Clicked");
        let n=text.toUpperCase();
        setText(n);
        // setText('Enter new Text here');
    };
    const handle2 = () => {
        console.log("LowerCase was Clicked");
        let n=text.toLowerCase();
        setText(n);
        // setText('Enter new Text here');
    };
    const handle3 = () => {
        console.log("Clear Text");
        let n="";
        setText(n);
        // setText('Enter new Text here');
    };
    const handle4 = () => {
        console.log("Sentence case");
        let n=text.split(" ");
        let n1=n.join(". ");
        setText(n1);
        // setText('Enter new Text here');
    };

    const handleonchange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };
    const[text,setText]=useState('Enter Text Here');
    return (
        <>
           
            <div className='container'>
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleonchange} value={text} id="myBox" rows="8"></textarea>
                </div>
               
          
            <button type="submit" onClick={handle1} className="btn btn-primary mx-2">Convert to upper case</button>

            <button type="submit" onClick={handle2} className="btn btn-primary mx-2">Convert to Lower case</button>
            <button type="submit" onClick={handle3} className="btn btn-primary mx-2">Clear Text</button>
            <button type="submit" onClick={handle4} className="btn btn-primary mx-2">Convert to Sentence Case</button>
            </div>
            <div className='container mt-3'>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{1/125 * text.split(" ").length} Minutes will be Needed</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
