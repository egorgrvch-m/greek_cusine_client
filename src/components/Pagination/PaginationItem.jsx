import React from "react";
import cl from "./Pagination.module.css";

const PaginationItem = ({ value, onClick, active }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <div
      className={`${cl.paginationItem} ${active ? cl.active : ""}`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default PaginationItem;
