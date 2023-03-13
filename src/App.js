import React, { useState } from 'react'
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a254c"
      showAlert("Dark mode has been enabled", "success");
      document.title = "textUtils-dark mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success");
      document.title = "textUtils-light mode"
    }
  }

  const toggleGreenMode = () => {
    if (mode !== "success") {
      setMode("success");
      document.body.style.backgroundColor = "#04502d"
      showAlert("Green mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success");
    }
  }

  const toggleRedMode = () => {
    if (mode !== "danger") {
      setMode("danger");
      document.body.style.backgroundColor = "#69020c"
      showAlert("Red mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="textUtils" aboutText="About" mode={mode} toggleDarkMode={toggleDarkMode} toggleGreenMode={toggleGreenMode} toggleRedMode={toggleRedMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

