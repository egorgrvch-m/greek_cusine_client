import React, { useState } from "react";
import cl from "./AdminPanel.module.css";
import ModalType from "../components/modals/ModalType/ModalType";
import ModalItem from "../components/modals/ModalItem/ModalItem";
import ModalItemDelete from "../components/modals/ModalItemDelete/ModalItemDelete";

const AdminPanel = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(false);
  const [deleteItemVisible, setDeleteItemVisible] = useState(false);
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
          <li
            className={cl.button_item}
            onClick={() => setDeleteItemVisible(true)}
          >
            Видалити товар
          </li>
        </ul>
      </div>
      <ModalType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <ModalItem show={itemVisible} onHide={() => setItemVisible(false)} />
      <ModalItemDelete
        show={deleteItemVisible}
        onHide={() => setDeleteItemVisible(false)}
      />
    </div>
  );
};

export default AdminPanel;
