import React from "react";
import { Link } from "react-router-dom";
import Dogs from "../assets/dogs.svg?react";
import { UserContext } from "../Contexts/UserContext";
import { headerStyle } from "../styles";

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={headerStyle.header}>
      <nav className={`${headerStyle.nav} container`}>
        <Link className={headerStyle.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link
            className={`${headerStyle.login} ${headerStyle.loginAfter}`}
            to="/account"
          >
            {data.nome}
          </Link>
        ) : (
          <Link
            className={`${headerStyle.login} ${headerStyle.loginAfter}`}
            to="/login"
          >
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
