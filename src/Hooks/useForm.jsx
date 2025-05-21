import React from "react";

const validationTypes = {
  email: {
    regex:
      /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    message:
      "A senha precisa ter uma letra maiúscula, uma minúscula, um número e um caracter especial. Com no mínimo 8 caracteres.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize apenas números",
  },
};

const useForm = (validationType) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (validationType === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (
      validationTypes[validationType] &&
      !validationTypes[validationType].regex.test(value)
    ) {
      setError(validationTypes[validationType].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
