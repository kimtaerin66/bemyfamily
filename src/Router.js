import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './router/Home';
import Login from './router/Login';


function Router() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
