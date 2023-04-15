import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import Cadaster from "../components/Cadaster";
import Login from "../components/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/home" Component={Home} />
        <Route path="/cadaster" Component={Cadaster} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router