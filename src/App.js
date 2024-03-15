import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Shop } from "./Components/Shop";
import Main from "./Components/Main";
import  Events  from "./Components/Events";
import { Appointments } from "./Components/Appointments";
import Info from "./Components/Info";
import { ShowProvider } from "./Context/Show";
import { SelectedProvider } from "./Context/Selected";
import {Contact} from "./Components/Contact"

function App() {
  return (
    <div>
      {/*<div style={{ backgroundImage: `url(${Cat})` }} className="cat"> */}
      <Router>
        <Navbar />
        <ShowProvider>
          <SelectedProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/Contact" element={<Contact />}/>
          </Routes>
          </SelectedProvider>
        </ShowProvider>
      </Router>
    </div>
  );
}

export default App;
