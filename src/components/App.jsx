import React, { useState } from "react";
import List from "./List";

const App = () => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  const saveValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  const addList = () => {
    setLists((preValue) => {
      return [value, ...preValue];
    });
    setValue("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={saveValue} value={value} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {lists.map((list) => (
            <List text={list} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
