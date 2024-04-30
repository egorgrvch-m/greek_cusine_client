import React, { useState } from "react";
import cl from "./ModalType.module.css";
import { createType } from "../../../http//itemAPI.js";

const ModalType = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(false);
  const MAX_LENGTH = 24;

  const addType = () => {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      setError(true);
      return;
    }
    if (!isNaN(trimmedValue)) {
      setError(true);
      return;
    }
    if (trimmedValue.length > MAX_LENGTH) {
      setError(true);
      return;
    }
    if (trimmedValue !== value) {
      setError(true);
      return;
    }
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setError(false);
  };

  const handleInputFocus = () => {
    setFocused(true);
    setError(false);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <div
      show={show}
      onHide={onHide}
      className={show ? `${cl.modal} ${cl.active}` : cl.modal}
      onClick={() => onHide(false)}
    >
      <div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
        <h1 className={cl.modal_title}>
          Додати новий тип продукції в меню ресторану
        </h1>
        <input
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={"Впищіть назву типу"}
          className={`${cl.modal_input} ${error ? cl.error : ""} ${
            focused ? cl.focused : ""
          }`}
        />
        {error && (
          <p className={cl.error_message}>
            {value.length > MAX_LENGTH
              ? `Максимальна довжина ${MAX_LENGTH} символів`
              : value.trim() !== value
              ? "Назва не може починатися або закінчуватися пробілом"
              : "Введіть коректне значення!"}
          </p>
        )}{" "}
        {}
        <button className={cl.button} onClick={addType}>
          Додати
        </button>
      </div>
    </div>
  );
};

export default ModalType;
