import React, { useState } from "react";
import cl from "./ModalType.module.css";
import { createType } from "../../../http//itemAPI.js";

const ModalType = ({ show, onHide }) => {
  const [value, setValue] = useState();

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <div
      show={show}
      onHide={onHide}
      className={show ? `${cl.modal} ${cl.active}` : cl.modal}
      onClick={() => onHide(false)}
    >
      <div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={"Введите название типа"}
        />
        <button className={cl.button} onClick={addType}>
          Створити
        </button>
      </div>
    </div>
  );
};

export default ModalType;
