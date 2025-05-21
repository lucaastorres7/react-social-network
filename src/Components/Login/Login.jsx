import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const loginStyles = {
  login: "grid grid-cols-2 min-h-screen gap-[2rem]",
  loginBefore:
    "before:block before:bg-[url(src/assets/login.jpg)] before:bg-no-repeat before:bg-center before:bg-cover",
  loginMediaQuery: "max-sm:grid-cols-1 max-sm:before:hidden",
  forms: "max-w-[30rem] p-[1rem] max-sm:max-w-full",
};

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
