import React, { useContext, useState, useEffect } from "react";
import cl from "./ModalItem.module.css";
import { Context } from "../../..";
import { LOGIN_ROUTE } from "../../../utils/consts";
import { fetchTypes, createItem } from "../../../http/itemAPI";

const ModalItem = ({ show, onHide }) => {
  const { item } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [text, setText] = useState("");
  const [file, setFile] = useState(0);

  useEffect(() => {
    fetchTypes().then((data) => item.setTypes(data));
  }, []);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addItem = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("typeId", item.selectedType.id);
    formData.append("text", text);
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
        <div className={cl.dropdown}>
          <button className={cl.dropdown_btn}>
            {item.selectedType.name || "Оберіть тип товару"}
          </button>
          <div className={cl.dropdown_content}>
            {item.types.map((type) => (
              <h1
                href={LOGIN_ROUTE}
                key={type.id}
                onClick={() => {
                  item.setSelectedType(type);
                }}
              >
                {type.name}
              </h1>
            ))}
          </div>
        </div>

        <input
          type="text"
          placeholder="Додайте назву товару"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Додайте вартість товару"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Додайте опис товару"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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
