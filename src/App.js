import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LogIn from "./components/LogIn/LogIn";
import { createContext, useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import Home from "./components/Home/Home";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Order from "./components/Order/Order";
import ManageOrder from "./components/ManageOrder/ManageOrder";
import Layout from "./components/Layout.js/Layout";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Layout></Layout>
          </Route>
          <Route path="/about"></Route>
          <PrivateRoute path="/product/:_id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/manageOrder">
            <ManageOrder />
          </PrivateRoute>
          <Route path="/logIn">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
