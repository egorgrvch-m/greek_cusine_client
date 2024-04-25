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
        <button
          className={cl.admin_panel__button}
          onClick={() => setItemVisible(true)}
        >
          Додати товар
        </button>
        <button
          className={cl.admin_panel__buttonItem}
          onClick={() => setTypeVisible(true)}
        >
          Додати тип
        </button>
      </div>
      <ModalType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <ModalItem show={itemVisible} onHide={() => setItemVisible(false)} />
    </div>
  );
};

export default AdminPanel;
