import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className={`container`}>
      <UserHeader />
      <Outlet context={{ user: data.id }} />
    </section>
  );
};

export default User;
