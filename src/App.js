import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyCollections from "./components/MyCollections";
import CreateNewCollection from "./components/CreateNewCollection";
import CollectionPage from "./components/CollectionPage";
import Logout from "./components/Logout";

function App() {
  const [myCollection, setMyCollection] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mycollections" element={<MyCollections />} />
        <Route path="/collection/:collection_id" element={<CollectionPage />} />
        <Route path="/collection" element={<CreateNewCollection />} />
      </Routes>
    </Router>
  );
}

export default App;
