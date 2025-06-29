import React, { useState } from "react";

const List = (props) => {
  const [isDone, setIsDone] = useState(false);

  const addStyle = () => {
    setIsDone((prevValue) => !prevValue);
  };

  return (
    <li
      onClick={addStyle}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
};

export default List;
