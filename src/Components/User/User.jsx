import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import Head from "../Helper/Head";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className={`container`}>
      <Head title="Minha Conta" />
      <UserHeader />
      <Outlet context={{ user: data.id }} />
    </section>
  );
};

export default User;
