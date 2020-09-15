import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Film from './pages/Film.jsx';
import Navbar from './pages/Navbar.jsx';
import People from './pages/People.jsx';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={Film} />
      <Route exact path="/people" component={People} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
