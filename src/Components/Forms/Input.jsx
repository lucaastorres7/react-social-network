import React from "react";
import { inputStyle } from "../../styles";

const Input = ({ label, type, id, value, onChange, error, onBlur }) => {
  return (
    <div className={inputStyle.wrapper}>
      <label className={inputStyle.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${inputStyle.input} ${inputStyle.inputHover}`}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={inputStyle.error}>{error}</p>}
    </div>
  );
};

export default Input;
