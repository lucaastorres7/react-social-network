import React from "react";
import { formStyles } from "../../styles";
import UserHeaderNav from "./UserHeaderNav";
import { useLocation } from "react-router-dom";
import { userHeaderStyle } from "../../styles";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/account/statistics":
        setTitle("Estatísticas");
        break;

      case "/account/post":
        setTitle("Poste sua Foto");
        break;

      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);

  return (
    <header className={userHeaderStyle.header}>
      <h1 className={`${formStyles.title} ${formStyles.titleAfter}`}>
        {title}
      </h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
