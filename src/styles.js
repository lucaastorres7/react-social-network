export const loginStyles = {
  login: "grid grid-cols-2 min-h-screen gap-[2rem]",
  loginBefore:
    "before:block before:bg-[url(src/assets/login.jpg)] before:bg-no-repeat before:bg-center before:bg-cover",
  loginMediaQuery: "max-sm:grid-cols-1 max-sm:before:hidden",
  forms: "max-w-[30rem] p-[1rem] max-sm:max-w-full mt-[20vh]",
};

export const formStyles = {
  title:
    "text-5xl font-(family-name:--type-second) my-[1rem] relative z-1 text-[#333]",
  titleAfter:
    "after:block after:w-[1.5rem] after:h-[1.5rem] after:bg-[#fb1] after:absolute after:top-5 after:left-[-5px] after:rounded-sm after:z-[-1]",
  form: "mb-[2rem]",
  forgot: "inline-block text-[#666] py-[0.5rem]",
  forgotAfter: "after:h-[2px] after:w-full after:bg-current after:block",
  register: "my-[4rem]",
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
  footer: "bg-[#fb1] pt-[3rem] px-[1rem] h-[10rem] text-center text-[#764701]",
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

export const userHeaderNavStyle = {
  nav: "grid grid-cols-4 gap-[1rem]",
  button:
    "bg-[#eee] rounded-sm h-[40px] w-[40px] flex items-center justify-center cursor-pointer border border-transparent transition delay-100",
  buttonHover:
    "hover:bg-white hover:shadow-[0_0_0_3px_#eee] hover:border-[#333] hover:outline-none",
  buttonFocus:
    "focus:bg-white focus:shadow-[0_0_0_3px_#eee] focus:border-[#333] focus:outline-none",
  buttonActive:
    "bg-white shadow-[0_0_0_3px_#fea] border-[#fb1] rounded-sm h-[40px] w-[40px] flex items-center justify-center cursor-pointer border transition delay-100",
};

export const userPhotoPostStyle = {
  photoPost: "grid grid-cols-2 gap-[2rem] mb-[2rem] max-sm:grid-cols-1",
  preview:
    "rounded-2xl bg-cover bg-center after:block after:h-0 after:p-[100%]",
};

export const userHeaderStyle = {
  header:
    "grid grid-cols-[1fr_auto] items-center mb-[2-rem] relative mt-[1rem]",
};

export const feedModalStyle = {
  modal:
    "fixed w-screen h-screen bg-black/40 top-0 left-0 flex z-1000 py-[2rem] px-[4rem] max-sm:px-[2rem]",
};

export const feedPhotosStyle = {
  feed: "grid grid-cols-3 gap-[1rem] mb-[1rem] justify-items-center max-sm:grid-cols-2",
};

export const feedPhotosItemStyle = {
  photo:
    "group grid border-sm overflow-hidden cursor-pointer nth-2:col-start-2 nth-2:col-end-4 nth-2:row-span-2 max-sm:nth-2:col-auto max-sm:nth-2:row-auto",
  img: "row-start-1 col-start-1",
  view: "row-start-1 col-start-1 bg-black/30 text-white text-[1rem] text-center items-center justify-center hidden group-hover:flex",
  viewBefore:
    "before:w-[16px] before:h-[10px] before:inline-block before:mr-[0.25rem] before:bg-[url(src/assets/visualizacao.svg)] after:bg-no-repeat",
};

export const commentStyle = {
  comments: "overflow-y-auto break-normal",
  comment: "mb-[0.5rem]",
};

export const commentsFormStyle = {
  form: "grid grid-cols-[1fr_auto] items-stretch m-[1rem]",
  formSingle: "grid grid-cols-[1fr_auto] items-stretch my-[1rem]",
  textarea:
    "block w-full text-[1rem] font-(family-name:--type-first) resize-none border-3 border-[#eee] p-[0.5rem] rounded-sm bg-[#eee] transition delay:200",
  textareaFocus:
    "focus:outline-none focus:border-[#fb1] focus:bg-white focus:shadow-[0_0_0_3px_#fea] hover:outline-none hover:border-[#fb1] hover:bg-white hover:shadow-[0_0_0_3px_#fea]",
  button:
    "cursor-pointer text-[#333] font-[1rem] bg-transparent px-[1rem] overflow-hidden focus:outline-none",
};

export const loadingStyle = {
  wrapper: "absolute w-full h-screen flex top-0 left-0 z-1000",
  loading:
    "m-auto w-[80px] h-[80px] flex justify-center items-center rounded-[50%] bg-white/50 pl-[5px]",
};

export const photoDeleteStyle = {
  delete:
    "bg-[#ddd] py-[0.3rem] px-[0.6rem] border border-transparent text-[0.875rem] cursor-pointer rounded-md transition delay-100",
  deleteFocus:
    "focus:outline-none focus:border-[#333] focus:bg-white focus:shadow-[0_0_0_3px_#eee] hover:outline-none hover:border-[#333] hover:bg-white hover:shadow-[0_0_0_3px_#eee]",
};

export const userGraphsStyle = {
  graph: "grid grid-cols-2 gap-[2rem] max-sm:grid-cols-1 mb-[2rem]",
  item: "shadow-[0_10px_20px_#9c9c9c] grid rounded-sm items-center",
  total: "col-start-1 col-end-3 p-[2rem] text-[2rem]",
};
