import React from "react";
import cl from "./Item.module.css";
import { useNavigate } from "react-router-dom";
import { ITEM_ROUTE } from "../../utils/consts";

const Item = ({ item }) => {
  const navigate = useNavigate();
  return (
    <article
      className={cl.item}
      onClick={() => navigate(ITEM_ROUTE + "/" + item.id)}
    >
      <img
        src={process.env.REACT_APP_API_URL + item.img}
        alt={item.alt}
        className={cl.item_img}
      />
      <div className={cl.item_inner}>
        <section className={cl.item_titleSection}>
          <h1 className={cl.item_title}>{item.name}</h1>
          <p className={cl.item_price}>{item.price}₴</p>
        </section>
        <section className={cl.item_textSection}>
          <p className={cl.item_text}>{item.text}</p>
        </section>
      </div>

      <div className={cl.item_buttonBlock}>
        <button className={cl.item_button}>Хочу</button>
      </div>
    </article>
  );
};

export default Item;
