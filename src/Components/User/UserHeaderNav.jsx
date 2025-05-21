import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import MinhasFotos from "../../assets/feed.svg?react";
import Estatisticas from "../../assets/estatisticas.svg?react";
import AdicionarFoto from "../../assets/adicionar.svg?react";
import Sair from "../../assets/sair.svg?react";
import { userHeaderNavStyle } from "../../styles";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={`${userHeaderNavStyle.nav}`}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${userHeaderNavStyle.buttonActive}`
            : `${userHeaderNavStyle.button} ${userHeaderNavStyle.buttonHover} ${userHeaderNavStyle.buttonFocus}`
        }
        to="/account"
        end
      >
        <MinhasFotos />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${userHeaderNavStyle.buttonActive}`
            : `${userHeaderNavStyle.button} ${userHeaderNavStyle.buttonHover} ${userHeaderNavStyle.buttonFocus}`
        }
        to="/account/statistics"
      >
        <Estatisticas />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${userHeaderNavStyle.buttonActive}`
            : `${userHeaderNavStyle.button} ${userHeaderNavStyle.buttonHover} ${userHeaderNavStyle.buttonFocus}`
        }
        to="/account/post"
      >
        <AdicionarFoto />
      </NavLink>
      <NavLink
        className={`${userHeaderNavStyle.button} ${userHeaderNavStyle.buttonHover} ${userHeaderNavStyle.buttonFocus}`}
        onClick={handleLogout}
      >
        <Sair />
      </NavLink>
    </nav>
  );
};

export default UserHeaderNav;
