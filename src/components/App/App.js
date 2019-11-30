import React from 'react';

import Header from './../Header/Header';
import Services from './../Services/Services';
import Features from './../Features/Features';
import Checkout from './../Checkout/Checkout';
import Footer from './../Footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <Features></Features>
      <Checkout></Checkout>
      <Footer></Footer>
    </div>
  );
}

export default App;
