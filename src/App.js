
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Homepage from './components/pages/homePage'
import Projects from './components/pages/projects'
import Contact from './components/pages/contact'

import './Assets/css/default.min.css'
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
