import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import { loginStyles } from "../../styles";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section
      className={`${loginStyles.login} ${loginStyles.loginBefore} ${loginStyles.loginMediaQuery}`}
    >
      <div className={loginStyles.forms}>
        <Outlet />
      </div>
    </section>
  );
};

export default Login;
