import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/about" component={ AboutPage }/>
        <Route exact path="/projects" component={ ProjectsPage }/>
        <Route exact path="/contact" component={ ContactPage }/>
      </Switch>
    </div>
  );
}

export default App;
