import React from "react";
// import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import UpdateCollection from "./UpdateCollection";
import MyCollections from "./MyCollections";
import styled from "styled-components";

const buttonStyle = {
  height: 30,
  width: 80,
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
  mt: 1,
  mb: 1,
  //   textDecoration: "none",
};

const CollectionPage = (props) => {
  const { collection } = props;
  //   const [displayed, setDisplayed] = useState(collection);
  //   const displayedCollection = useSelector((state) => state.collection);
  const { collection_name, collection_type, collection_tag } = useParams();
  const navigate = useNavigate();

  const showCollection = () => {
    console.log("Collection: ", collection);
  };

  return (
    <div>
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
        <Typography variant="h4">Collection Name: {collection_name}</Typography>
        <Typography variant="h4">Collection Type: {collection_type}</Typography>
        <Typography variant="h4">Collection Tag: {collection_tag}</Typography>
        {/* <Link
          to={{
            pathname: `/mycollections/${collection.collection_name}/update`,
            state: { collection: collection },
          }}
        > */}
        <Button
          sx={{ ...buttonStyle }}
          // onClick={() => navigate(<UpdateCollection collection={collection} />)}
          //   collection={collection}
        >
          <StyledLink>
            <Link to="/mycollections/update">Edit</Link>
          </StyledLink>
        </Button>
        <Button sx={{ ...buttonStyle, width: 200 }}>
          <StyledLink>
            <Link to="/mycollections">Back To Collections</Link>
          </StyledLink>
        </Button>
        {/* </Link> */}
        {/* <Button onClick={showCollection}>Collection</Button> */}
        {/* <Typography variant="h4">Collection Type: {collection_type}</Typography> */}
      </Box>
    </div>
  );
};

const StyledLink = styled.div`
  a{
    color: #000;
    text-decoration: none;
  }
`;

export default CollectionPage;
