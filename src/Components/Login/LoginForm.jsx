import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";

const LoginForm = () => {
  const username = useForm("email");
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      async function userLogin() {
        const response = await fetch(
          "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(),
          }
        );
        const data = await response.json();
        console.log(data);
      }

      userLogin();
    }
  }

  return (
    <div>
      <h1 className="text-2xl">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />
        <Input label="Senha" type="password" id="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </div>
  );
};

export default LoginForm;
