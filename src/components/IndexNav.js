import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { lg } from "../BreakPoints";

import { Typography } from "@mui/material";
const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 100;

  ${lg({
    justifyContent: "space-between",    
  })}
`;

const Icon = styled.img`
width: 30px;
height: 30px;
margin-left: 2rem;
${lg({
  marginLeft: "0",
})}
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #50A060;
  &:hover {
    color: 
    #C9EFC7;
  }
`;

const Button = styled.button`
  background-color: 
  #50A060;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  cursor: pointer;  
  &:hover {
    background-color: 
    #C9EFC7;
  }
`;

const IndexNav = () => {
  let navigate = useNavigate();
  return (
    <Container>
       <Icon src="kanbango-website-favicon-color (1).png" sx={{
        ml: "2rem" ,
   
      }}/>
      <Typography sx={{
      ml: "-72rem"}} >
     KanbanGo
      </Typography>
      <RightSide>
        <Button onClick={()=>navigate("/login")}>Log in</Button>
        <Button onClick={()=>navigate("/register")}>Sign up</Button>
      </RightSide>
    </Container>
  );
};

export default IndexNav;
