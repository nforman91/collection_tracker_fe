import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";

const style = {
  backgroundColor: "primary.light",
  width: "100%",
};

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ ...style }}>
        <Toolbar>
          <StyledLinks>
            <Typography variant="title" color="inherit" fontSize="1.5rem">
              <Link to="/">Collection Tracker</Link>
            </Typography>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/myaccount">My Account</Link>
            <Link to="/mycollections">My Collections</Link>
          </StyledLinks>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const StyledLinks = styled.div`
  width: 100%;
  margin: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #000a9b;
    text-decoration: none;
    font-family: 'Roboto';
  }
`;

export default NavBar;
