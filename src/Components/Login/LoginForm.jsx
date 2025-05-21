import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from "../../Contexts/UserContext";
import Error from "../UI/Error";

const buttonStyle = {
  button:
    "text-base text-[#764701] cursor-pointer rounded-md bg-[#fb1] px-[1.2rem] py-[0.8rem] box-border min-w-[8rem] transition delay-100",
  buttonHover:
    "focus:outline-none focus:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] hover:outline-none hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1]",
  buttonDisabled: "disabled:opacity-50 disabled:cursor-wait",
};

const formStyles = {
  title:
    "text-5xl font-(family-name:--type-second) my-[1rem] relative z-1 text-[#333]",
  titleAfter:
    "after:block after:w-[1.5rem] after:h-[1.5rem] after:bg-[#fb1] after:absolute after:top-5 after:left-[-5px] after:rounded-sm after:z-[-1]",
  form: "mb-[2rem]",
  forgot: "inline-block text-[#666] py-[0.5rem]",
  forgotAfter: "after:h-[2px] after:w-full after:bg-current after:block",
  register: "mt-[4rem]",
  subtitle: "font-(family-name:--type-second) text-[2rem]/1 relative",
  subtitleAfter:
    "after:block after:bg-[#ddd] after:h-[0.5rem] after:w-[3rem] after:rounded-sm after:absolute after:bottom-[-20px]",
};

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
