import React, { useContext, useState, useEffect, useCallback } from "react";
import cl from "./ModalItem.module.css";
import { Context } from "../../..";
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
      setNameError("Назва товару не може бути пустою");
      isValid = false;
    } else if (name.trim().length > 22) {
      setNameError("Назва товару не може містити більше 22 символів");
      isValid = false;
    } else if (/^\s+|\s+$/gm.test(name)) {
      setNameError("Назва товару не має містити пробіл на початку та кінці");
      isValid = false;
    } else {
      setNameError("");
    }

    if (text.trim() === "") {
      setTextError("Опис товару не може бути пустим");
      isValid = false;
    } else if (text.trim().length > 100) {
      setTextError("Опис товару не може бути більше за 100 символів");
      isValid = false;
    } else if (/^\s+|\s+$/gm.test(text)) {
      setTextError("Опис товару не має містити пробіл на початку та кінці");
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

  const handleTypeSelection = (type) => {
    item.setSelectedType(type);
    console.log(item.selectedType.name);
    forceUpdate();
  };

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  return (
    <div
      show={show}
      onHide={onHide}
      className={show ? `${cl.modal} ${cl.active}` : cl.modal}
      onClick={() => onHide(false)}
    >
      <div className={cl.modal_content} onClick={(e) => e.stopPropagation()}>
        <h1 className={cl.modal_title}>
          Заповніть всі поля, щоб додати товар у меню.
        </h1>
        <div className={cl.dropdown}>
          <button className={cl.dropdown_btn}>
            {item.selectedType.name || "Оберіть тип товару"}
          </button>
          <div className={cl.dropdown_content}>
            {item.types.map((type) => (
              <button
                className={cl.dropdown_content_btn}
                key={type.id}
                onClick={() => {
                  handleTypeSelection(type);
                }}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Впишіть назву товару"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${cl.modal_input} ${nameError && cl.error}`}
        />
        {nameError && <span className={cl.error_message}>{nameError}</span>}

        <input
          type="number"
          placeholder="Впишіть ціну товару"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className={cl.modal_input}
        />

        <input
          type="text"
          placeholder="Впишіть опис товару"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={`${cl.modal_input} ${textError && cl.error}`}
        />
        {textError && <span className={cl.error_message}>{textError}</span>}

        <input
          type="file"
          placeholder="Додайте фото товару"
          onChange={selectFile}
        />
        <button className={cl.button} onClick={addItem}>
          Створити
        </button>
      </div>
    </div>
  );
};

export default ModalItem;
