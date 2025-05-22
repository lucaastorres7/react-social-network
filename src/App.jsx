import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer";
import LoginForm from "./Components/Login/LoginForm";
import LoginCreate from "./Components/Login/LoginCreate";
import LoginPasswordForgot from "./Components/Login/LoginPasswordForgot";
import LoginPasswordReset from "./Components/Login/LoginPasswordReset";
import { UserStorage } from "./Contexts/UserContext";
import User from "./Components/User/User";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Feed from "./Components/Feed/Feed";
import UserPhotoPost from "./Components/User/UserPhotoPost";
import UserStats from "./Components/User/UserStats";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photo/:id" element={<Photo />} />
              <Route path="/profile/:user" element={<UserProfile />} />
              <Route path="/login" element={<Login />}>
                <Route path="" element={<LoginForm />} />
                <Route path="create" element={<LoginCreate />} />
                <Route path="forgot" element={<LoginPasswordForgot />} />
                <Route path="reset" element={<LoginPasswordReset />} />
              </Route>
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              >
                <Route path="" element={<Feed />} />
                <Route path="post" element={<UserPhotoPost />} />
                <Route path="statistics" element={<UserStats />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
