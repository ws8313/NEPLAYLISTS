import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import Edit from './page/Edit/Edit';
import Home from './page/HomePage/Home';


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
