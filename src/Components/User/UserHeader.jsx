import React from "react";
import { formStyles } from "../../styles";
import UserHeaderNav from "./UserHeaderNav";
import { useLocation } from "react-router-dom";

const userHeaderStyle = {
  header:
    "grid grid-cols-[1fr_auto] items-center mb-[2-rem] relative mt-[1rem]",
};

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    console.log(location);

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
