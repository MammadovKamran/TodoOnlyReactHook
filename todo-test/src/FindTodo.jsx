import React, { useState } from "react";
import {  Input } from "reactstrap";

const FindTodo = ({ findTodo }) => {
  const [findData, setFindData] = useState("");

  return (
    <div className="d-flex justify-content-center  mt-2 w-50">
      <Input
        id="input"
        placeholder="Find todo"
        value={findData}
        onChange={(e) => {
          setFindData(e.target.value);
          findTodo(findData);
        }}
      ></Input>
      
    </div>
  );
};

export default FindTodo;
