export const loginStyles = {
  login: "grid grid-cols-2 min-h-screen gap-[2rem]",
  loginBefore:
    "before:block before:bg-[url(src/assets/login.jpg)] before:bg-no-repeat before:bg-center before:bg-cover",
  loginMediaQuery: "max-sm:grid-cols-1 max-sm:before:hidden",
  forms: "max-w-[30rem] p-[1rem] max-sm:max-w-full",
};

export const formStyles = {
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

export const buttonStyle = {
  button:
    "text-base text-[#764701] cursor-pointer rounded-md bg-[#fb1] px-[1.2rem] py-[0.8rem] box-border min-w-[8rem] transition delay-100",
  buttonHover:
    "focus:outline-none focus:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] hover:outline-none hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1]",
  buttonDisabled: "disabled:opacity-50 disabled:cursor-wait",
};

export const footerStyle = {
  footer: "",
};

export const headerStyle = {
  header: "shadow-[0_1px_1px_rgba(0,0,0,.1)] fixed w-full z-100 bg-white top-0",
  logo: "py-[0.5rem]",
  login: "text-[#333] flex items-center",
  loginAfter:
    "after:inline-block after:w-[14px] after:h-[17px] after:bg-[url(src/assets/usuario.svg)] after:bg-no-repeat after:bg-center after:ml-[0.5rem] after:relative after:top-[-1px]",
  nav: "flex justify-between items-center h-[4rem]",
};

export const inputStyle = {
  input:
    "border border-[#eee] block w-full p-[0.8rem] rounded-md bg-[#eee] transition delay-200",
  inputHover:
    "focus:outline-none focus:border-[#fb1] focus:bg-white focus:shadow-[0_0_0_3px_#fea] hover:outline-none hover:border-[#fb1] hover:bg-white hover:shadow-[0_0_0_3px_#fea]",
  label: "block pb-[0.5rem]",
  wrapper: "mb-[1rem]",
  error: "text-[#f31] text-[0.875rem] mt-[0.25rem]",
};
