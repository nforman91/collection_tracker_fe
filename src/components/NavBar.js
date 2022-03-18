import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";

const style = {
  backgroundColor: "primary.light",
};

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ ...style }}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Collection Tracker
          </Typography>
          <StyledLinks>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/mycollections">My Collections</Link>
          </StyledLinks>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const StyledLinks = styled.div`
  width: 100%;
  margin-left: 2rem;
  display: flex;
  justify-content: space-between;
`;

export default NavBar;
