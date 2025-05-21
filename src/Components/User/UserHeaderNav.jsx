import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import MinhasFotos from "../../assets/feed.svg?react";
import Estatisticas from "../../assets/estatisticas.svg?react";
import AdicionarFoto from "../../assets/adicionar.svg?react";
import Sair from "../../assets/sair.svg?react";

const userHeaderNavStyle = {
  nav: "grid grid-cols-4 gap-[1rem]",
  button:
    "bg-[#eee] rounded-sm h-[40px] w-[40px] flex items-center justify-center cursor-pointer border border-transparent transition delay-100",
  buttonHover:
    "hover:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] hover:outline-none",
  buttonFocus:
    "focus:bg-white focus:shadow-[0_0_0_3px_#eee] focus:border-[#333] focus:outline-none",
  buttonActive:
    "bg-white shadow-[0_0_0_3px_#fea] border-[#fb1] rounded-sm h-[40px] w-[40px] flex items-center justify-center cursor-pointer border transition delay-100",
};

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
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
        <MinhasFotos /> {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${userHeaderNavStyle.buttonActive}`
            : `${userHeaderNavStyle.button} ${userHeaderNavStyle.buttonHover} ${userHeaderNavStyle.buttonFocus}`
        }
        to="/account/statistics"
      >
        <Estatisticas /> {mobile && "Estatísticas"}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${userHeaderNavStyle.buttonActive}`
            : `${userHeaderNavStyle.button} ${userHeaderNavStyle.buttonHover} ${userHeaderNavStyle.buttonFocus}`
        }
        to="/account/post"
      >
        <AdicionarFoto /> {mobile && "Adicionar Foto"}
      </NavLink>
      <NavLink
        className={`${userHeaderNavStyle.button} ${userHeaderNavStyle.buttonHover} ${userHeaderNavStyle.buttonFocus}`}
        onClick={handleLogout}
      >
        <Sair /> {mobile && "Sair"}
      </NavLink>
    </nav>
  );
};

export default UserHeaderNav;
