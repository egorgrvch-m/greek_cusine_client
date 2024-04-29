import React, { useContext, useState, useEffect } from "react";
import cl from "./ModalItem.module.css";
import { Context } from "../../..";
import { LOGIN_ROUTE } from "../../../utils/consts.js";
import { fetchTypes, createItem } from "../../../http/itemAPI";

const ModalItem = ({ show, onHide }) => {
  const { item } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [nameError, setNameError] = useState("");
  const [textError, setTextError] = useState("");

  useEffect(() => {
    fetchTypes().then((data) => item.setTypes(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const validateInputs = () => {
    let isValid = true;
    if (name.trim() === "") {
      setNameError("Название товара не должно быть пустым");
      isValid = false;
    } else if (name.trim().length > 22) {
      setNameError("Название товара должно содержать не более 22 символов");
      isValid = false;
    } else if (/^\s+|\s+$/gm.test(name)) {
      setNameError(
        "Название товара не должно содержать пробелы в начале и конце"
      );
      isValid = false;
    } else {
      setNameError("");
    }

    if (text.trim() === "") {
      setTextError("Описание товара не должно быть пустым");
      isValid = false;
    } else if (text.trim().length > 100) {
      setTextError("Описание товара должно содержать не более 100 символов");
      isValid = false;
    } else if (/^\s+|\s+$/gm.test(text)) {
      setTextError(
        "Описание товара не должно содержать пробелы в начале и конце"
      );
      isValid = false;
    } else {
      setTextError("");
    }

    return isValid;
  };

  const addItem = () => {
    if (!validateInputs()) return;

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("typeId", item.selectedType.id);
    formData.append("text", text.trim());
    createItem(formData).then((data) => onHide());
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
          Заполните все поля, чтобы добавить новый товар в меню.
        </h1>
        <div className={cl.dropdown}>
          <button className={cl.dropdown_btn}>
            {item.selectedType.name || "Выберите тип товара"}
          </button>
          <div className={cl.dropdown_content}>
            {item.types.map((type) => (
              <button
                className={cl.dropdown_content_btn}
                key={type.id}
                onClick={() => {
                  item.setSelectedType(type);
                }}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Введите название товара"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${cl.modal_input} ${nameError && cl.error}`}
        />
        {nameError && <span className={cl.error_message}>{nameError}</span>}

        <input
          type="number"
          placeholder="Введите стоимость товара"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className={cl.modal_input}
        />

        <input
          type="text"
          placeholder="Введите описание товара"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${cl.modal_input} ${textError && cl.error}`}
        />
        {textError && <span className={cl.error_message}>{textError}</span>}

        <input
          type="file"
          placeholder="Добавьте фото товара"
          onChange={selectFile}
        />
        <button className={cl.button} onClick={addItem}>
          Создать
        </button>
      </div>
    </div>
  );
};

export default ModalItem;
