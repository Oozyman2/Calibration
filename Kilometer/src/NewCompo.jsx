import React from "react";
import { useState } from "react";

const NewCompo = () => {
  const [addList, setaddList] = useState([]);
  const [relay, setrelay] = useState([true]);
  const handlechange = (e) => {};
  if (relay == true) {
    alert("Welcome to this page");
  }
  return <div></div>;
}

export default NewCompo;
