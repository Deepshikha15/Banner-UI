import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Awai from './Awai';
import Header from './Header';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import ImgGenerate from './bannerComponent/ImgGenerator';
import ExcelsheetComponent from './Excel/ExcelsheetComponent';
import Usermanagement from './Usermgmt/Usermanagement';
import UserCreate from './Usermgmt/UserCreate';
import Userupdate from './Usermgmt/Userupdate';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/pdfgenerate" element={<Awai/>} />
          <Route path="/bannergenerate" element={<ImgGenerate/>} />
          <Route path="/excelsheet" element={<ExcelsheetComponent/>} />
          <Route path="/usermanagement" element={<Usermanagement/>} />
          <Route path="/create" element={<UserCreate/>} />
          <Route exact path='/update/:id' element={<Userupdate/>} />
         
        </Routes>
    </>
  );
}

export default App;
