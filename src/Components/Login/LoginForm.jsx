import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from "../../Contexts/UserContext";
import Error from "../Helper/Error";
import { formStyles, buttonStyle } from "../../styles";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className={`${formStyles.title} ${formStyles.titleAfter}`}>Login</h1>
      <form className={formStyles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />
        <Input label="Senha" type="password" id="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link
        className={`${formStyles.forgot} ${formStyles.forgotAfter}`}
        to="/login/forgot"
      >
        Esqueceu a senha?
      </Link>

      <div className={formStyles.register}>
        <h2 className={`${formStyles.subtitle} ${formStyles.subtitleAfter}`}>
          Cadastre-se
        </h2>
        <p className="my-[2rem]">Ainda não tem conta? Cadastre-se no site.</p>
        <Link
          className={`${buttonStyle.button} ${buttonStyle.buttonHover} ${buttonStyle.buttonDisabled}`}
          to="/login/create"
        >
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
