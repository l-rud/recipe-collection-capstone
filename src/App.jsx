import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>{import.meta.env.VITE_apiBaseUrl}</p>
    </>
  )
}

export default App
