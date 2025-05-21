import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <section className={`container`}>
      <UserHeader />
      <Outlet />
    </section>
  );
};

export default User;
