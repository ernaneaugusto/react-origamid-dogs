import { useState } from "react";

const initialState = "";

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um e-mail válido. Ex: seuemail@email.com",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize somente números.",
  },
};

const useForm = (type) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState(null);

  const onChange = (event) => {
    const value = event.target.value;
    if (error) validate(value);
    setValue(value);
  };

  const validate = (value) => {
    // para campos com preenchimento sem validade e opcionais
    if (type === false) return true;

    if (value.length === 0) {
      setError("Preencha esse campo.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  return {
    value,
    setValue,
    onChange,
    onBlur: () => validate(value),
    error,
    validate: () => validate(value),
  };
};

export default useForm;
