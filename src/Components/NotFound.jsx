import React from "react";
import { formStyles } from "../styles";

const NotFound = () => {
  return (
    <div className="container mainContainer">
      <h1 className={`${formStyles.title} ${formStyles.titleAfter}`}>
        Erro: 404
      </h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export default NotFound;
