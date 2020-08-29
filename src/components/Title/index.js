// The code for this file was derived from:
// 18-React\01-Activities\16-Stu_FriendRefactor\Solved\src\components\Title\index.js
import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}

export default Title;
