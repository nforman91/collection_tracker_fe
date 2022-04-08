import React from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
// import axios from "axios";
import { connect } from "react-redux";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

// const initialdeleteUserValues = {
//   username: "",
//   password: "",
// };

const initialUser = {
  username: "",
  password: "",
};

const DeleteAccount = (props) => {
    const { users } = props;

//   const [deletedUser, setDeletedUser] = useState(users);
//   const navigate = useNavigate();

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      m={3}
    >
      <Typography variant="h4">Delete Account</Typography>
      <Button sx={{ ...style }} color="primary" variant="contained">
        Delete Account
      </Button>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(DeleteAccount);
// export default deleteUser;
