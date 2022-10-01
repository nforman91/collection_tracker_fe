import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";
import { motion } from 'framer-motion';

const style = {
  backgroundColor: "primary.light",
  width: "100%",
};

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <AppBar position="static" sx={{ ...style }}>
        <Toolbar>
          <StyledLinks>
            <ul>
              <li>
                <Link to="/">Collection Tracker</Link>
                <StyledLine 
                    transition={{ duration: 0.75 }} 
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/" ? "100%" : "0%" }}
                />
              </li>
              <li>
                <Link to="/login">Login</Link>
                <StyledLine 
                    transition={{ duration: 0.75 }} 
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/login" ? "100%" : "0%" }}
                />
              </li>
              <li>
                <Link to="/signup">Signup</Link>
                <StyledLine 
                    transition={{ duration: 0.75 }} 
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/signup" ? "100%" : "0%" }}
                />
              </li>
              <li>
                <Link to="/myaccount">My Account</Link>
                <StyledLine 
                    transition={{ duration: 0.75 }} 
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/myaccount" ? "100%" : "0%" }}
                />
              </li>
              <li>
                <Link to="/mycollections">My Collections</Link>
                <StyledLine 
                    transition={{ duration: 0.75 }} 
                    initial={{ width: "0%" }}
                    animate={{ width: pathname === "/mycollections" ? "100%" : "0%" }}
                />
              </li>
            </ul>
          </StyledLinks>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const StyledLinks = styled.div`
  width: 100%;
  @media(max-width: 480px){
    font-size: 80%;
  }
  margin-right: 2rem;
  display: flex;
  a{
    color: #000a9b;
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 1.5rem;
  }
  ul{
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  li{
    padding-left: 0rem;
    position: relative;
  }
`;

const StyledLine = styled(motion.div)`
    height: 0.1rem;
    background: #000a9b;
    width: 0%;
    position: absolute;
    bottom: -20%;
`;

export default NavBar;
