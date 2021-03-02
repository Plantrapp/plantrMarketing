import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Support from "./pages/Support/Support";
import Footer from "./components/Footer/Footer";
import Features from "./pages/Features/Features";
import "./App.css";
import styled from "styled-components";

const Styled404 = styled.div`
  /* position: relative; */
  /* border: 1px solid blue; */
  height: 77vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 2;
  .link {
    color: #1ac197;
    text-decoration: underline;
    font-weight: bold;
  }
  a:hover {
    cursor: pointer;
  }
`;

function NotFound() {
  const history = useHistory();
  return (
    <Styled404>
      <h2>Whoops... 404: Page not found</h2>
      {/* <h3>Couldn't find the page you were looking for...</h3> */}
      <p>
        The page you were looking for doesn't exist, click{" "}
        <a className="link" onClick={() => history.goBack()}>
          here
        </a>{" "}
        to return to the previous page.
      </p>
    </Styled404>
  );
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/support" component={Support} />
        <Route path="/features" component={Features} />
        <Route exact path="/" component={Home} />
        <Route render={() => <NotFound />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
