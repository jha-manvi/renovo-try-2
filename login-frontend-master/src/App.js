import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import React, { useEffect, useState} from 'react';
import './App.css';
import Login from "../src/components/Login"
import Create_Account from './components/Create_Account';
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    // <Login/>npm yarn add react-router-dom
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/create-new-account" element={<Create_Account/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;