import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowComponent from "./components/ShowComponent";

export default function Index() {
  return (
    <BrowserRouter basename="/">
      <Route path="/" element={<ShowComponent />} />
     // <Route path="/show" element={<ShowComponent />} />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShowComponent/>);
