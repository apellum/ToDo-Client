import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
