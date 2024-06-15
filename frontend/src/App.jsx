import { useState } from 'react'
import './App.css'
import styled from "styled-components";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import LogIn from './pages/LogIn';
import User from './pages/User';
import SignUp from './pages/SignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header>Welcome to the app</Header>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </>
  )
}

export default App

const Header = styled.header`
  width: 100%;
  height:1.5rem;
  font-size:1rem;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color:teal;
  color:white;
  font-weight:bold;

`
