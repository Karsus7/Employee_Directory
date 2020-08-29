// The code for this file was derived from:
// 18-React\01-Activities\16-Stu_FriendRefactor\Solved\src\components\Wrapper\index.js
import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
