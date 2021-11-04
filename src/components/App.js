import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import CreateToDo from './CreateToDo';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/new-todo' element={<CreateToDo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
