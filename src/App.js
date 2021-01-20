import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Support from "./pages/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/support" component={Support} />
      <Footer />
    </div>
  );
}

export default App;
