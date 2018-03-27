
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './component/header';
import Section from './component/inner';
import Last from './component/last';
import css from './css/style.css';

const root = document.getElementById('root');

const App = () => (
    <div>
    <Nav/>
    <Section/>
    <Last/>
    </div>,
    root
  );
  

export default App;