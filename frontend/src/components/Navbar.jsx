import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavbarWrapper>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/user' >User</Link>
        <Link to='/signup'>SignUp</Link>
        <Link to='/login'>Login</Link>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.nav`
    width: 100%;
    height: 2.5rem;
    display:flex;
    align-items:center;
    justify-content: space-around;
    font-size:1.5rem;
    background-color:#CDE8E5;
`