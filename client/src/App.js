import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import Edit from './page/edit/Edit';
import Home from './page/homePage/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element = { <Home /> }/>
        <Route exact path='/edit' component = { <Edit />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

