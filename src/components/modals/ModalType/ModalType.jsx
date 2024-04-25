import React, { useState } from "react";
import cl from "./ModalType.module.css";
import { createType } from "../../../http/itemAPI";

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
          type="text"
          placeholder="Впищіть назву типу"
          value={value}
          onChange={(e) => e.target.value}
        />
        <button className={cl.button} onClick={addType}>
          Створити
        </button>
      </div>
    </div>
  );
};

export default ModalType;
