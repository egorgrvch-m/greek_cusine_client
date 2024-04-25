import React, { useContext } from "react";
import cl from "./Menu.module.css";
import Item from "../Item/Item.jsx";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

const Menu = observer(({ items }) => {
  const { item } = useContext(Context);
  return (
    <article className={cl.menu}>
      <div className={cl.menu_inner}>
        {item.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
});

export default Menu;
