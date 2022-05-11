import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
// import { CollectionContext } from "./contexts/CollectionContext";
import useToken from "./components/useToken";

import Home from "./components/Home";
import Login from "./components/users/Login";
import Signup from "./components/users/Signup";
// import PrivateRoute from "./components/PrivateRoute";
import MyAccount from "./components/users/MyAccount";
import UpdateAccount from "./components/users/UpdateAccount";
import DeleteAccount from "./components/users/DeleteAccount";
// import Logout from "./components/users/Logout";
import MyCollections from "./components/collections/MyCollections";
import CreateNewCollection from "./components/collections/CreateNewCollection";
import CollectionPage from "./components/collections/CollectionPage";
import UpdateCollection from "./components/collections/UpdateCollection";

function App() {
  // const shouldRedirect = true;
  // const [token, setToken] = useToken();

  // if(!token){
  //   return <Login setToken={setToken}/>
  // }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/myaccount" element={<MyAccount />} />
        <Route path="/myaccount/updateaccount" element={<UpdateAccount />} />
        <Route path="/myaccount/deleteaccount" element={<DeleteAccount />} />
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
