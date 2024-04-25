import React from "react";
import cl from "./AboutBlocks.module.css";
import AboutBlockItem from "./AboutBlockItem/AboutBlockItem";

const AboutBlocks = ({ items }) => {
  return (
    <article className={cl.aboutBlocks}>
      <div className={cl.aboutBlocks_inner}>
        {items.map((item) => (
          <AboutBlockItem key={item.id} {...item} />
        ))}
      </div>
    </article>
  );
};

export default AboutBlocks;
