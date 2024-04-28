import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import cl from "./Pages.module.css";
import PaginationItem from "../components/Pagination/PaginationItem";

const Pages = observer(() => {
  const { item } = useContext(Context);
  const pageCount = Math.ceil(item.totalCount / item.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div className={cl.pages_inner}>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          active={item.page === page}
          onClick={() => item.setPage(page)}
          value={page}
        >
          {page}
        </PaginationItem>
      ))}
    </div>
  );
});

export default Pages;
