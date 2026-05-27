import React from "react";
import "./App.css";
import { AppFooter, AppHeader } from "./layout";
import { Home } from "./pages";

// @desc - root component
const App = () => {
  return (
    <>
      <div className="App-container">
        <AppHeader />
        <Home />
        <AppFooter />
      </div>
    </>
  );
};

export default App;
