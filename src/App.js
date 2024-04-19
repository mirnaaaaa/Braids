import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavInfo from "./Components/NavInfo";
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
    <div className="h-screen bg-[#92A49A]">
        <ShowProvider>
          <SelectedProvider>

    <NavInfo />
          
          </SelectedProvider>
        </ShowProvider>
    </div>
  );
}

export default App;
