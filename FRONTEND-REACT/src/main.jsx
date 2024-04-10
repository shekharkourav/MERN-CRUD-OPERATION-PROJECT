import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

export default function Index(){
  return(
    <BrowserRouter basename='/'>
      <Routes path="/"></Routes>
    </BrowserRouter>
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render();
