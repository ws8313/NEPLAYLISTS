import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import Edit from './page/edit/Edit';
import Home from './page/homePage/Home';
<<<<<<< HEAD


=======
import React from 'react';
>>>>>>> 2e30f1675ca1a7f81e46795153396279cd485a57
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element = { <Home /> }/>
        <Route exact path='/edit' element = { <Edit /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

