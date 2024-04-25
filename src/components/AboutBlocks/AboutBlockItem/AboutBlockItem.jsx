import React from "react";
import cl from "./AboutBlockItem.module.css";

const AboutBlockItem = ({ name, img, text }) => {
  return (
    <article className={cl.aboutBlocks_item}>
      <section className={cl.item_titleSection}>
        <img src={img} alt="" className={cl.item_img} />
        <h1 className={cl.item_title}>{name}</h1>
      </section>
      <section className={cl.item_textSection}>
        <p className={cl.item_text}>{text}</p>
      </section>
    </article>
  );
};

export default AboutBlockItem;
