import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Login;
