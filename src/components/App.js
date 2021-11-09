import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';
import CreateToDo from './CreateToDo';
import Signup from './sessions/Signup';
import Login from './sessions/Login';
import ListToDo from './ListToDo';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/new-todo' element={<CreateToDo/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/todos' element={<ListToDo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
