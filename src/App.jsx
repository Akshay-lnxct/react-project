import React, { useEffect, useState } from "react";
import Login from "./components/Login";
// import Navbar from './components/Navbar'
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const token = sessionStorage.getItem("token");

  console.log("token _____________ ", token);

  return (
    <>
      {token ? (
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<Home />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="*" element={<Login />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
