import React from 'react';
import './tailwind_styles/output.css';
import Navbar from './components/Header/Navbar';
import { Outlet } from 'react-router-dom';


export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Outlet/>
    </div>
  )
}
