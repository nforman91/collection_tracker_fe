import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { connect } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { titleAnim } from "../../animation";

const style = {
    ml: 3, 
    mt: 3,
};

function MyAccount(props) {
    const { users } = props;

  return (
      <Box sx={{ ...style }}>
    <Typography variant="h4">My Account</Typography>
    {/* <div>Username: {users.username}</div> */}
    <Box sx={{ ...style, display: "flex", flexDirection: "column" }}>
      <StyledMyAccount
        variants={titleAnim}
        initial="hidden"
        animate="show"
      >
        <Link to="/myaccount/updateaccount">Update Account</Link>
        <Link to="/myaccount/deleteaccount">Delete Account</Link>
      </StyledMyAccount>
      </Box>
    </Box>
  )
}

const StyledMyAccount = styled(motion.div)`
    color: black;
    display: flex;
    flex-direction: column;
`;

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(MyAccount);
// export default MyAccount;
