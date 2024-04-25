import React from "react";
import cl from "./Footer.module.css";
import logo from "../../static/logo.png";
import { LOGIN_ROUTE } from "../../utils/consts";

const Footer = () => {
  return (
    <article className={cl.footer}>
      <div className={cl.footer_inner}>
        <img
          src={logo}
          alt="Логотип ресторану. Агора, ресторан грецької кухні."
          className={cl.footerLogo_img}
        />
        <div className={cl.footer_contentBlock}>
          <article className={cl.block}>
            <h1 className={cl.block_title}>О нас</h1>
            <section className={cl.blockSection}>
              <ul className={cl.block_list}>
                <li className={cl.block_list__item}>
                  <a href={LOGIN_ROUTE} className={cl.list_item__link}>
                    Головна
                  </a>
                </li>
              </ul>
            </section>
          </article>
          <article className={cl.block}>
            <h1 className={cl.block_title}>Меню</h1>
            <section className={cl.blockSection}>
              <ul className={cl.block_list}>
                <li className={cl.block_list__item}>
                  <a href={LOGIN_ROUTE} className={cl.list_item__link}>
                    Риба
                  </a>
                </li>
                <li className={cl.block_list__item}>
                  <a href={LOGIN_ROUTE} className={cl.list_item__link}>
                    Салати
                  </a>
                </li>
                <li className={cl.block_list__item}>
                  <a href={LOGIN_ROUTE} className={cl.list_item__link}>
                    Снеки
                  </a>
                </li>
                <li className={cl.block_list__item}>
                  <a href={LOGIN_ROUTE} className={cl.list_item__link}>
                    Десерти
                  </a>
                </li>
              </ul>
            </section>
          </article>
          <article className={cl.block}>
            <h1 className={cl.block_title}>Графік</h1>
            <section className={cl.blockSection}>
              <ul className={cl.block_list}>
                <li className={cl.block_list__item}>
                  <p className={cl.list_item__text}>
                    <b>Пн-Пт</b>
                    <br />
                    <b>11:00 - 23:00</b>
                  </p>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </div>
    </article>
  );
};

export default Footer;
