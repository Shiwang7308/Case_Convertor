import React, { useState } from 'react';
import '../App.css';
export default function Form(props) {

    const [text, setText] = useState("");
    // const onChangeFun = (event)=>{
    //     console.log("on change");
    //     setText(event.target.value);
    // }
    function handleCopy() {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to clipboard Successfully");
    }
    // const giveColor= ()=>{
    //   let len = text.length;
       
    // }
  return (
    <div>
      {/* <div style={{height: '50px',}}></div>  */}
      {/* key value pair to assign property but value must be in form of string and end or seprated other key:value pair by comma not semicolon */}
      {/*  rememeber style mai ek aur curly braces for  */}
      <div className="mb-3 container">
  <label htmlFor="exampleFormControlTextarea1" className="form-label fs-3 text-success">{props.title}</label>
  <textarea className="form-control text-white bg-black" id="exampleFormControlTextarea1" rows="8" value={text} onChange={(event)=>{     // onChange is responsible to take event as argument and setText(event.target.value) so that what we press in keyboard in texarea value is add there withour define this we not able to write anything on textarea value box
    setText(event.target.value);
  }} placeholder="Enter your text here..."></textarea>

  <button type="button" className="btn btn-outline-primary my-2" onClick={()=>{
    let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted into Uppercase");
  }}>UPPERCASE</button>

  <button type="button" className="btn btn-outline-primary my-2 mx-3"  onClick={()=>{
     let newText = text.toLowerCase();
   setText(newText);
   props.showAlert("Converted into Lowercase");
}}>lowercase</button>

<button type="button" className="btn btn-outline-primary my-2" onClick={handleCopy}>Copy Text</button>

<button type="button" class="btn btn-outline-danger mx-2" onClick={()=>{
      
        if(window.confirm("Do you want to reset the text"))   // confirm pop up syntax in react
        {
            setText("");
        }
        props.showAlert("Text Area is reset successfuly");
      }}>Reset</button>
 {/* Text Length code */}
<p><b>Number of characters: <span className='colorChange'>{text.length}</span></b></p>

{/* Code to count the number of words written */}
{/* filter takes a function which return true or false depend on the condition on the basis of which fuction over which .filter write work or not  */}
<p><b>Word Count: </b><span className='colorChange'>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</span></p>

<h4>Preview</h4>
<p className='colorChange'>{text.length>0?text:"Preview will be shown here"}</p>
{/* <p>{text.length>0?{text}:"Preview will be shown here"}</p> ------------> for printing text value you not requried one more curly braces it is an error */}

{/* // if you open curly braces means javascript is start now if you again open one more curly braces then it will behave like an object and work only for key value pair like in calse of style written  */}
</div>
    </div>
  )
}
