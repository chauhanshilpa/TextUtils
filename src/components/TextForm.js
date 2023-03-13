import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState("");

    let handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("text converted to uppercase!", "success")
    }

    let handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text converted to lowercase!", "success")
    }


    let handleChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        // this will select the whole content of this Id.
        text.select();
        // or 
        /* Copy the text inside the text field */
        // document.execCommand("copy");

        // writes the specified text string to the system clipboard
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        // regex is used here
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed", "success")
    }

    return (
        <>
            <div className={`container ${props.mode === "light" ? "text-dark" : "text-light"}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea style={{ backgroundColor: props.mode !== "light" && "grey", color: props.mode !== "light" ? "white" : "black" }} className="form-control" id="myBox" value={text} onChange={handleChange} rows="8" placeholder="Enter text here" ></textarea>
                </div>
                <button className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2`} onClick={handleUpClick}>convert to uppercase</button>
                <button className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2`} onClick={handleLwClick}>convert to lowercase</button>
                <button className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2`} onClick={handleCopy}>copy the text</button>
                <button className={`btn btn-${props.mode === "light" ? "primary" : props.mode} mx-2`} onClick={handleExtraSpaces}>remove extra spaces</button>
            </div>
            <div className={`container my-2 ${props.mode === "light" ? "text-dark" : "text-light"}`}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm;