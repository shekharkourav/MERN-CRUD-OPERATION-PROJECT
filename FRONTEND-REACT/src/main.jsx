import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateComponent from './components/CreateComponent';

export default function Index(){
  return(
    <BrowserRouter basename='/'>
      <Route path="/" element={<App/>}/>
    </BrowserRouter>
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
