import React, { useContext } from "react";
import cl from "./MenuNav.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

const MenuNav = observer(() => {
  const { item } = useContext(Context);
  return (
    <nav className={cl.menuNav}>
      <h1 className={cl.menuNav_title}>Меню</h1>
      <ul className={cl.menuNav_list}>
        {item.types.map((type) => (
          <li
            onClick={() => item.setSelectedType(type)}
            className={`${cl.menuNav_list__item} ${
              type.id === item.selectedType.id ? cl.selected : ""
            }`}
            key={type.id}
          >
            {type.name}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default MenuNav;
