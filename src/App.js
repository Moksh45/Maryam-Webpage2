import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/search" element={<h1>Hello World</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
