import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import Home from './page/homePage/Home';
import React from 'react';
import Viewer from './page/CanvasTest/Viewer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element = { <Home /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

