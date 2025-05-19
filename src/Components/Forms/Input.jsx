import React from "react";

const inputStyle = {
  input:
    "border border-[#eee] block w-full p-[0.8rem] rounded-md bg-[#eee] transition delay-200",
  inputHover:
    "focus:outline-none focus:border-[#fb1] focus:bg-white focus:shadow-[0_0_0_3px_#fea] hover:outline-none hover:border-[#fb1] hover:bg-white hover:shadow-[0_0_0_3px_#fea]",
  label: "block pb-[0.5rem]",
  wrapper: "mb-[1rem]",
  error: "text-[#f31] text-[0.875rem] mt-[0.25rem]",
};

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
