import React, { useContext, useRef, useEffect } from "react";
import cl from "./MenuNav.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

const MenuNav = observer(() => {
  const { item } = useContext(Context);
  const menuNavRef = useRef(null);

  useEffect(() => {
    if (menuNavRef.current) {
      menuNavRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleMenuClick = () => {};

  return (
    <nav className={cl.menuNav}>
      <h1
        className={cl.menuNav_title}
        ref={menuNavRef}
        onClick={handleMenuClick}
      >
        Меню
      </h1>
      <ul className={cl.menuNav_list}>
        {item.types.map((type) => (
          <li
            onClick={() => item.setSelectedType(type)}
            className={`${cl.menuNav_list__item} ${
              item.selectedType && type.id === item.selectedType.id
                ? cl.selected
                : ""
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
