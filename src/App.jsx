import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer";
import LoginForm from "./Components/Login/LoginForm";
import LoginCreate from "./Components/Login/LoginCreate";
import LoginPasswordLost from "./Components/Login/LoginPasswordLost";
import LoginPasswordReset from "./Components/Login/LoginPasswordReset";
import { UserStorage } from "./Contexts/UserContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}>
              <Route path="" element={<LoginForm />} />
              <Route path="create" element={<LoginCreate />} />
              <Route path="lost" element={<LoginPasswordLost />} />
              <Route path="reset" element={<LoginPasswordReset />} />
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
