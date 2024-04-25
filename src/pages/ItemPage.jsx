import React, { useEffect, useState } from "react";
import cl from "./ItemPage.module.css";
import { useParams } from "react-router-dom";
import { fetchOneItem } from "../http/itemAPI";
const ItemPage = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchOneItem(id).then((data) => setItem(data));
  }, []);

  return (
    <article className={cl.item}>
      <div className={cl.container}>
        <div className={cl.item_inner}>
          <img
            className={cl.item_img}
            src={process.env.REACT_APP_API_URL + item.img}
            alt={item.alt}
          />
          <section className={cl.item_contentSection}>
            <h1 className={cl.item_title}>
              <strong>{item.name}</strong>
            </h1>
            <p className={cl.item_price}>
              <strong>{item.price} UAH</strong>
            </p>
            <p className={cl.item_text}>{item.text}</p>
            <button className={cl.item_button}>Хочу</button>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ItemPage;
