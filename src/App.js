// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form'
import Alert from './Components/Alert'

// import Practice from './Components/PracticeCssColor';


// let name="shiwang";
function App() {
  const [alert, setAlert] = useState("");

  const showAlert = (message) =>{
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }

  return (
  <>
    <Navbar title=""/>
    <Alert alert={alert}/>
    <Form showAlert={showAlert} title="Case Converter"/>
   
    {/* <Practice/> */}
  </>
  );
}

export default App;

// MY LEARNING

// ------------> rememeber jab ham js function declare karte hai toh () nhi aata event vallo mai
// EX-> onClick = {ChangeMode()}  ----> No error shown but funtion not called remove ()