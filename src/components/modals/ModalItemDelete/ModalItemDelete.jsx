import React, { useState, useContext } from "react";
import cl from "./ModalItemDelete.module.css";
import { Context } from "../../..";
import { deleteItem } from "../../../http/itemAPI.js";

const ModalItemDelete = ({ show, onHide }) => {
  const { item } = useContext(Context);
  const [itemId, setItemId] = useState("");

  const handleDelete = async () => {
    try {
      await deleteItem(itemId);
      onHide(false);
      console.log("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
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
          type="number"
          placeholder="Впишіть id товару"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          className={cl.modal_input}
        />
        <button className={cl.button} onClick={handleDelete}>
          Видалити товар
        </button>
      </div>
    </div>
  );
};

export default ModalItemDelete;
