import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import cl from "./HeaderNav.module.css";
import basket from "../../../static/basket.png";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../../utils/consts";
import { useNavigate } from "react-router-dom";

const HeaderNav = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <nav className={cl.nav}>
      <ul className={cl.nav_list}>
        <li className={cl.nav_list__item}>
          <a href="#" className={cl.list_item__link}>
            Головна
          </a>
        </li>
        <li className={cl.nav_list__item}>
          <a href="#" className={cl.list_item__link}>
            Про нас
          </a>
        </li>
        <li className={cl.nav_list__item}>
          <a href="#" className={cl.list_item__link}>
            Меню
          </a>
        </li>
        <li className={cl.nav_list__item}>
          <a href="#" className={cl.list_item__link}>
            Контакти
          </a>
        </li>
        {user.isAuth ? (
          <section className={cl.itemControl_section}>
            <li className={cl.nav_list__itemControl}>
              <button className={cl.itemControl_button}>
                <img
                  src={basket}
                  alt="Кнопка для переходу у корзину товарів."
                  className={cl.itemControl_img}
                />
              </button>
            </li>
            <li className={cl.nav_list__itemControl}>
              <button
                className={cl.itemControl_button}
                onClick={() => navigate(ADMIN_ROUTE)}
              >
                Адмін панель
              </button>
            </li>
            <li className={cl.nav_list__itemControl}>
              <button
                className={cl.itemControl_button}
                onClick={() => {
                  logOut();
                  navigate(SHOP_ROUTE);
                }}
              >
                Вихід
              </button>
            </li>
          </section>
        ) : (
          <section className={cl.itemControl_section}>
            <li className={cl.nav_list__itemControl}>
              <button className={cl.itemControl_button}>
                <img
                  src={basket}
                  alt="Кнопка для переходу у корзину товарів."
                  className={cl.itemControl_img}
                />
              </button>
            </li>
            <li className={cl.nav_list__itemControl}>
              <button
                className={cl.itemControl_button}
                onClick={() => navigate(LOGIN_ROUTE)}
              >
                Вхід
              </button>
            </li>
          </section>
        )}
      </ul>
    </nav>
  );
});

export default HeaderNav;
