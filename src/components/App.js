import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../actions/sessions';
import "../App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Errors from './Errors'
import Home from './Home';
import CreateToDo from './CreateToDo';
import Signup from './sessions/Signup';
import Login from './sessions/Login';
import ListToDo from './ListToDo';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      dispatch(getCurrentUser(token))
    }
  }, [dispatch])

  const d = new Date();
  let year = d.getFullYear()

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Errors/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/new-todo' element={<CreateToDo/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/todos' element={<ListToDo/>} />
        </Routes>
        <footer align="center" className="footer--pin">Created by DrewCour Development {year}</footer>
      </Router>
    </div>
  );
}

export default App;
