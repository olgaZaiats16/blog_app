import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import App from './App';
import Archive from "./Components/Header/Archive"
import Category from "./Components/Header/Category"
import Contact from "./Components/Header/Contact/Contact"
import Pages from "./Components/Header/Pages"

 
const rootElement = document.getElementById('root');
render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/archive" element={<Archive />}/>
      <Route path="/category" element={<Category />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/pages" element={<Pages />}/>
    </Routes>
  </BrowserRouter>, 
  rootElement
  );
