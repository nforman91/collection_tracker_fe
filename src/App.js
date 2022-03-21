import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyCollections from "./components/MyCollections";
import CreateNewCollection from "./components/CreateNewCollection";
import CollectionPage from "./components/CollectionPage";
import UpdateCollection from "./components/UpdateCollection";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/mycollections" element={<MyCollections />} />
        <Route
          path="/mycollections/createnew"
          element={<CreateNewCollection />}
        />
        <Route
          path="/mycollections/:collection_name"
          element={<CollectionPage />}
        />
        <Route path="/mycollections/update" element={<UpdateCollection />} />
      </Routes>
    </Router>
  );
}

export default App;
