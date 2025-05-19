import React from "react";
import { Link } from "react-router-dom";
import Dogs from "../assets/dogs.svg?react";

const headerStyle = {
  header: "shadow-[0_1px_1px_rgba(0,0,0,.1)] fixed w-full z-100 bg-white top-0",
  logo: "py-[0.5rem]",
  login: "text-[#333] flex items-center",
  loginAfter:
    "after:inline-block after:w-[14px] after:h-[17px] after:bg-[url(src/assets/usuario.svg)] after:bg-no-repeat after:bg-center after:ml-[0.5rem] after:relative after:top-[-1px]",
  nav: "flex justify-between items-center h-[4rem]",
};

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <nav className={`${headerStyle.nav} container`}>
        <Link className={headerStyle.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link
          className={`${headerStyle.login} ${headerStyle.loginAfter}`}
          to="/login"
        >
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
