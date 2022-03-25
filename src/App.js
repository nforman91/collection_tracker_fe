import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
// import { CollectionContext } from "./contexts/CollectionContext";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import MyCollections from "./components/MyCollections";
import CreateNewCollection from "./components/CreateNewCollection";
import CollectionPage from "./components/CollectionPage";
import UpdateCollection from "./components/UpdateCollection";
import Logout from "./components/Logout";

function App() {
  const shouldRedirect = true;
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9000/api/collections`).then((res) => {
      setCollection(res.data);
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <CollectionContext.Provider value={{ collection }}> */}
        <Route
          exact
          path="/mycollections"
          element={<MyCollections />}
          // element={`${
          //   shouldRedirect ? (
          //     <PrivateRoute>
          //       <MyCollections />
          //     </PrivateRoute>
          //   ) : (
          //     <Login />
          //   )
          // }`}
        />
        {/* </CollectionContext.Provider> */}
        <Route
          path="/mycollections/createnew"
          element={<CreateNewCollection />}
        />
        <Route
          path="/mycollections/:collection_name"
          element={<CollectionPage />}
        />
        <Route
          path="/mycollections/:collection_name/update"
          element={<UpdateCollection />}
        />
      </Routes>
    </Router>
  );
}

export default App;
