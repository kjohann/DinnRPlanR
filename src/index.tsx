import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';

initializeApp({
  apiKey: "AIzaSyDGBvh3MyrUf6xg-hfZBXjYyKl11ujgmpA",
  authDomain: "dinnrplanr.firebaseapp.com",
  projectId: "dinnrplanr",
  storageBucket: "dinnrplanr.appspot.com",
  messagingSenderId: "1084507204220",
  appId: "1:1084507204220:web:f12ac8819469e62cea37f9"
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
