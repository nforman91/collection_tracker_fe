import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { connect } from "react-redux";

const style = {
    ml: 3, 
    mt: 3,
};

function MyAccount(props) {
    const { users } = props;

  return (
      <Box sx={{ ...style }}>
    <Typography variant="h3">My Account</Typography>
    {/* <div>Username: {users.username}</div> */}
    <Box sx={{ ...style, display: "flex", flexDirection: "column" }}>
        <Link to="/myaccount/updateaccount">Update Account</Link>
        <Link to="/myaccount/deleteaccount">Delete Account</Link>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(MyAccount);
// export default MyAccount;
