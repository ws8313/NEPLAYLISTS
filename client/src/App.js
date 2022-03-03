import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import Edit from './page/edit/Edit';
import Home from './page/homePage/Home';
import React from 'react';
import CanvasTest from './page/CanvasTest/CanvasTest';
import Viewer from './page/CanvasTest/Viewer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path='/test' element = { <Viewer /> }/>

        <Route exact path='/' element = { <Home /> }/>
        <Route exact path='/edit' element = { <Edit /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

