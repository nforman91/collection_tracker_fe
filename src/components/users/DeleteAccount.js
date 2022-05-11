import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import DeleteAccountModal from "./DeleteAccountModal";
import { connect } from "react-redux";

const style = {
  mt: 2,
  width: { sm: 100, md: 300 },
  backgroundColor: "primary.light",
  boxShadow: 6,
};

const buttonStyle = {
  height: 30,
  width: 180,
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
  mt: 1,
  mb: 1,
  //   textDecoration: "none",
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
    const { users, setUser } = props;
      const [modal, setModal] = useState(false);
      const navigate = useNavigate();

  const showModal = () => {
    setModal(true);
    console.log("User: ", users);
  };

  const handleYes = () => {
    axios
      .delete(
        `http://localhost:9000/api/user/${users.user_id}`
      )
      navigate("/home")
      .then((res) => {
        setUser(res.data);
      });
  };

  const handleNo = () => {
    setModal(false);
  };

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
      <Button sx={{ ...buttonStyle }} onClick={showModal}>
          Delete Account
        </Button>
      {modal && (
          <DeleteAccountModal
            users={users}
            handleYes={handleYes}
            handleNo={handleNo}
          />
        )}
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
