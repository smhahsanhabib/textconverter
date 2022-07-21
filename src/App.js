import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Stylesheets from "./components/Stylesheets";
import { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const[mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null);
const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}


  const toggleMode=()=>{
    if (mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#388f85';
      showAlert("Dark Mode Enabled!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled!", "success");
    }
  }
  return (
    <>
    <Stylesheets />
      <Navbar title="TextMan"mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      {/* <Navbar title="TextMan" homesection="Home" /> */}
      
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter Your Text Below"mode={mode} />
      </div>

      <p className="copyright"> &copy; All rights reserved by Ahsan Habib</p> 
      <p className="copyright"> Ping me here for more information : smahsanhabib01@gmail.com</p> 
    </>
  );
}

export default App;
