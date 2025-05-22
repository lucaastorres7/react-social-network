import React from "react";
import DogsFooter from "../assets/dogs-footer.svg?react";
import { footerStyle } from "../styles";

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <div className="flex justify-center">
        <DogsFooter />
      </div>

      <p className="mt-[1rem]">Dogs. Alguns direitos reservados</p>
    </div>
  );
};

export default Footer;
