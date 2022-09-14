import React from "react";

const Cell = ({ color, onClick, canMove }) => {
  return (
    <div
      className={`${color === "w" ? "blackcell" : "whitecell"} cell`}
      onClick={onClick}
    >
      <span>{canMove && "✅"}</span>
    </div>
  );
};

export default Cell;
