import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import  FilmsPage  from './components/HomePage/FilmsPage';

function App() {
  return (
    <div>
        <Navbar/>
        <FilmsPage/>
    </div>
  );
}

export default App;
