import React from 'react';
import './tailwind_styles/output.css';
import Navbar from './components/Header/Navbar';
import Card from './components/Body/Card';

export default function App() {
  return (
    <div className=''>
      <Navbar />
      <Card/>
    </div>
  )
}
