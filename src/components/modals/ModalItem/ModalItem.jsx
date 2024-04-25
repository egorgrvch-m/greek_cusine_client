import React, { useContext } from "react";
import cl from "./ModalItem.module.css";
import { Context } from "../../..";
import { LOGIN_ROUTE } from "../../../utils/consts";

const ModalItem = ({ show, onHide }) => {
  const { item } = useContext(Context);
  return (
    <div
      show={show}
      onHide={onHide}
      className={show ? `${cl.modal} ${cl.active}` : cl.modal}
      onClick={() => onHide(false)}
    >
      <div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={cl.dropdown}>
          <button className={cl.dropdown_btn}>Оберіть тип товару</button>
          <div className={cl.dropdown_content}>
            {item.types.map((type) => (
              <a href={LOGIN_ROUTE} key={type.id}>
                {type.name}
              </a>
            ))}
          </div>
        </div>

        <input type="text" placeholder="Додайте назву товару" />
        <input type="number" placeholder="Додайте вартість товару" />
        <input type="text" placeholder="Додайте опис товару" />
        <input type="file" placeholder="Додайте фото товару" />
        <button className={cl.button}>Створити</button>
      </div>
    </div>
  );
};

export default ModalItem;
