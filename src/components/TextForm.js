import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  // convert to uppercase
  const handleUpclick = () => {
    // console.log("Uppercase was selected");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  // convert to lowercase
  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  // clear the text
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("The text is cleared!", "success");
  };

  // copy the text
  const handleCopy = () => {
    var text = document.getElementById("firstbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("The text has been copied!", "success");
  };

  // remooving extra spaces
  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed!", "success");
  };

  //remove all the symbols
  const handletextExtract = () => {
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join("");
    setText(res1);
    props.showAlert("All the symbols are removed!", "success");
  };
  //to extract only the numbers in the text:
  const handleNumExtract = () => {
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const res = digits.join("");
    setText(res);
    props.showAlert("The numbers are extracted from the text!", "success");
  };

  // replace the word in full document
  const replaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let tobereplaced = new RegExp(repval, "g");

    let toreplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
    props.showAlert("Word/words are replaced!", "success");
  };
  // capitalize the words
  const toCapitalize = () => {
    const cap = text.split(" ");
    let ss = "";

    cap.forEach((element) => {
      ss +=
        element.replace(element.charAt(0), element.charAt(0).toUpperCase()) +
        " ";
      setText(ss);
    });
    props.showAlert("All the words are capitalized!", "success");
  };

  // starting of the state
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="firstbox"
            rows="8"
          ></textarea>
        </div>
        {/* <button className="btn-first mx-1" onClick={handleUpclick}> */}
        {/* bootstrap button  */}
        <button
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handleUpclick}
        >
          Convert To Uppercase
        </button>
        {/* <button className="btn-second mx-1" onClick={handlelowclick}> */}
        {/* bootstrap button  */}
        <button
          type="button"
          className="btn btn-info mx-1 my-1"
          onClick={handleLowclick}
        >
          Convert To Lowercase
        </button>

        <button
          type="button"
          className="btn btn-dark mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-warning mx-1 my-1"
          onClick={handleExtraspace}
        >
          Remove Extra Spaces
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1 my-1"
          onClick={handletextExtract}
        >
          Remove Symbols
        </button>
        <button
          type="button"
          className="btn btn-dark mx-1 my-1"
          onClick={handleNumExtract}
        >
          Extract Numbers
        </button>
        <button
          type="button"
          className="btn btn-warning mx-1 my-1"
          onClick={replaceString}
        >
          Replace Word
        </button>
        <button
          type="button"
          className="btn btn-success mx-1 my-1"
          onClick={toCapitalize}
        >
          Capitalize
        </button>
        <button
          type="button"
          className="btn btn-dark mx-1 my-1"
          onClick={handleClearclick}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-3 ">
        <h2>Word and Character Count</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter your text & we will preview it here!"}
        </p>
      </div>
    </>
  );
}
