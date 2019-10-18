import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Homepage from './components/pages/homePage'

function App() {
  return (
    <div className="App">
      <Header />
        <Homepage />
      <Footer />
    </div>
  );
}

export default App;
