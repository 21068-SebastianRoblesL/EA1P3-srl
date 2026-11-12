import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Inicio from './pages/Inicio';
import Preguntas from './pages/Preguntas';
import Productos from './pages/Productos';
import Header from './componentes/Header';
import Login from './pages/Login'
import Registro from './pages/Registro'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/preguntas' element={<Preguntas/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/Login' element={<Login/>}/>
         <Route path='/Registro' element={<Registro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
