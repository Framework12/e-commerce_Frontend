import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./App.css";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Home from "./containers/Home/Home";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import {getInitialData, isUserLoggedIn } from "./actions";
import { useEffect } from "react";
import Products from "./containers/Products/Products";
import Orders from "./containers/Orders/Orders";
import Category from "./containers/Category/Category";
import NewPage from "./containers/NewPage/NewPage";

function App() {

const dispatch = useDispatch()
const auth = useSelector(state=>state.auth)

useEffect(() => {
  if (!auth.authenticate) {
    dispatch(isUserLoggedIn());
  }
  if(auth.authenticate){
    dispatch(getInitialData());
  }
}, [auth.authenticate]);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/page" element={<PrivateRoute />}>
            <Route path="/page" element={<NewPage />} />
          </Route>
          <Route path="/products" element={<PrivateRoute />}>
            <Route path="/products" element={<Products/>} />
          </Route>
          <Route path="/orders" element={<PrivateRoute />}>
            <Route path="/orders" element={<Orders/>} />
          </Route>
          <Route path="/category" element={<PrivateRoute />}>
            <Route path="/category" element={<Category/>} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
