import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Content from './components/Content/Content';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
