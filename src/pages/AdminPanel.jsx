import React, { useState } from "react";
import cl from "./AdminPanel.module.css";
import ModalType from "../components/modals/ModalType/ModalType";
import ModalItem from "../components/modals/ModalItem/ModalItem";

const AdminPanel = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(false);
  return (
    <div className={cl.admin_panel}>
      <div className={cl.container}>
        <ul className={cl.button_list}>
          <li className={cl.button_item} onClick={() => setTypeVisible(true)}>
            Додати тип
          </li>
          <li className={cl.button_item} onClick={() => setItemVisible(true)}>
            Додати товар
          </li>
          <li className={cl.button_item}>Видалити тип</li>
          <li className={cl.button_item}>Видалити товар</li>
        </ul>
      </div>
      <ModalType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <ModalItem show={itemVisible} onHide={() => setItemVisible(false)} />
    </div>
  );
};

export default AdminPanel;
