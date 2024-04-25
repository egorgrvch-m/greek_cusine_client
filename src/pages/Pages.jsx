import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import cl from "./Pages.module.css";
import PaginationItem from "../components/Pagination/PaginationItem";

const Pages = observer(() => {
  const { item } = useContext(Context);
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className={cl.pages_inner}>
      {pages.map((page) => (
        <PaginationItem key={page} value={page} />
      ))}
    </div>
  );
});

export default Pages;
