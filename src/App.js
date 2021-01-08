import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./pages/NavBar/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Donate from "./pages/Donate/Donate";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      {/* <NavBar /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
