import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Timeline from './components/timeline/Timeline';
import Prize from './components/prize/Prize';
import Themes from './components/Themes/Themes';
import Venue from './components/Venue/Venue';
import Judge from './components/Judges/Judge';
import Sponsor from './components/Sponsors/Sponsors';
import Faq from './components/faq/Faq';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Timeline/>
      <Prize/>
      <Themes/>
      <Venue/>
      <Judge/>
      <Sponsor/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
