import React from "react";
import cl from "./Header.module.css";
import logo from "../../static/logo.png";
import HeaderNav from "./HeaderNav/HeaderNav";
import { SHOP_ROUTE } from "../../utils/consts";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={cl.header}>
      <article className={cl.header_inner}>
        <NavLink to={SHOP_ROUTE}>
          <img
            src={logo}
            alt="Логотип ресторану. Агора, ресторан грецької їжі."
            className={cl.header_logo}
          />
        </NavLink>
        <HeaderNav />
      </article>
    </header>
  );
};

export default Header;
