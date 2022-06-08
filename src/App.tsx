
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
    <main>
      <header className="stripe stripe-gray stripe-curved">
        <div className="container">
          <div className="d-none d-md-block">
              <div className="row">
                  <div className="col-auto">
                      <nav>
                          <ul className="nav nav-subnav">
                              <li className="nav-item">
                                  <a className="nav-link active" href="/">Overview</a>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div className="col-md">
                      <nav>
                          <ul className="nav nav-subnav justify-content-end flex-column flex-md-row">
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Cloud</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/">Server</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/">FAQ</a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>
      
      
          <div className="text-center">
            <h1 className="fs-36">Pricing that adjusts with your usage needs</h1>
            <p className="color-text-muted small">High availability feature included in plan with more than 100 deployment targets.</p>
          </div>
          <div className="price-index d-flex flex-column align-items-center overlap-next-section-200 mt-5 ml-auto mr-auto">
            <div className="row align-items-stretch justify-content-center">
              
                <Cloud />
              
                <Server />
             
            </div>
          </div>
        </div>
      </header>
    </main> 
    <Footer />
    </>
 );
};

export default App;
