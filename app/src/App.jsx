import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'

function App() {
  return (

    <div>
      <h1 className="text-2xl font-bold mb-4">🏡 Booking Dashboard</h1>
      <Dashboard />
    </div>

  )
}

export default App


const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
};
