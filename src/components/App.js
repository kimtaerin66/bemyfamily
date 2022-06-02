import React from 'react';
import Header from './Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Join from '../Routes/Join';
import Login from '../Routes/Login';
import Footer from './Footer';

function App() {
  return (
    <>
    <BrowserRouter>
     <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/join" element={<Join />} />
       <Route path="/login" element={<Login />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
