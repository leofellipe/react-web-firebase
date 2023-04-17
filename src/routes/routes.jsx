import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/home" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router