import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Personalinfo } from './App';
import Navbar from './App';
import { Background } from './App';
import { Mainimage } from './App';
import { Introtext } from './App';
import { Workandhobbies } from './App';

const navbarContainer = document.getElementById('NavBar');
const navbarRoot = createRoot(navbarContainer);
navbarRoot.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
);

const mainimageContainer = document.getElementById('MainImage');
const mainimageRoot = createRoot(mainimageContainer);
mainimageRoot.render(
  <React.StrictMode>
    <Mainimage />
    <Background />
  </React.StrictMode>,
);

const introtextContainer = document.getElementById('IntroText');
const introtextRoot = createRoot(introtextContainer);
introtextRoot.render(
  <React.StrictMode>
    <Introtext />
  </React.StrictMode>,
);

const personalinfoContainer = document.getElementById('PersonalInfo');
const personalinfoRoot = createRoot(personalinfoContainer);
personalinfoRoot.render(
  <React.StrictMode>
    <Personalinfo />
  </React.StrictMode>,
);

const workandhobbiesContainer = document.getElementById('WorkandHobbies');
const workandhobbiesRoot = createRoot(workandhobbiesContainer);
workandhobbiesRoot.render(
  <React.StrictMode>
    <Workandhobbies />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
