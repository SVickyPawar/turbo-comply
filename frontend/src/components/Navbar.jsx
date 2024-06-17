import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { isLoggedIn, handleLogin } = useContext(AuthContext);

  return (
    <NavbarWrapper>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/about'>About</StyledLink>
      <StyledLink to='/user'>User</StyledLink>
      <StyledLink to='/signup'>SignUp</StyledLink>
      <LoginButton onClick={handleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </LoginButton>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  background-color: #CDE8E5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #007BFF;
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    color: #007BFF;
  }
`;
