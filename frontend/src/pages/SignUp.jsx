import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <BtnDiv>
      <Button>SignUp</Button>
    </BtnDiv>
  )
}

export default SignUp


const BtnDiv = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
border:1px solid red;
`

const Button = styled.button`
background-color:lightgreen;
border-radius:0.75rem;
padding:0.75rem 1rem;
outline:none;
border:transparent;
font-size:1rem;
`