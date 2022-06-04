import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import "./App.scss";
import { Header } from './components/templates/header';
import { Footer } from './components/templates/footer';
import Cloud from "./components/pricing/Cloud";
import Server from "./components/pricing/Server";

export const App = () => {
  return (
    <>
    <Header />   
      <div>
        <h1>Pricing Page</h1>
        <div>
          <Cloud />
          <Server />
        </div>
      </div>
    <Footer />
    </>
 );
};

export default App;
