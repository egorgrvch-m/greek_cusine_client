import React, { useContext, useEffect, useState } from "react";
import Menu from "../components/Menu/Menu";
import MenuNav from "../components/MenuNav/MenuNav";
import AboutBlocks from "../components/AboutBlocks/AboutBlocks";
import { MENU_ITEMS, ABOUT_BLOCK_ITEMS } from "../constants/constants_items.js";
import ModalItem from "../components/modals/ModalType/ModalType.jsx";
import { observer } from "mobx-react-lite";
import { Context } from "../index.js";
import { fetchTypes } from "../http/itemAPI.js";
import { fetchItems } from "../http/itemAPI.js";
import Pages from "./Pages.jsx";

const Shop = observer(() => {
  const { item } = useContext(Context);
  const [modalActive, setModalActive] = useState(true);

  useEffect(() => {
    fetchTypes().then((data) => item.setTypes(data));
    fetchItems(null, 1, 2).then((data) => {
      item.setItems(data.rows);
      item.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchItems(item.selectedType.id, item.page, 10).then((data) => {
      item.setItems(data.rows);
      item.setTotalCount(data.count);
    });
  }, [item.page, item.selectedType]);

  return (
    <div>
      <AboutBlocks items={ABOUT_BLOCK_ITEMS} />
      <MenuNav />
      <Menu items={MENU_ITEMS} />
      <Pages />
      <ModalItem active={modalActive} setActive={setModalActive} />
    </div>
  );
});

export default Shop;
