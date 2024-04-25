import React from "react";
import cl from "./Pagination.module.css";

const PaginationItem = ({ value }) => {
  return (
    <div className={cl.paginationItem}>
      <button className={cl.pag_button}>{value}</button>
    </div>
  );
};

export default PaginationItem;
