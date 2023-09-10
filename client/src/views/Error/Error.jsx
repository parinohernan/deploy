import React from "react";
import style from "./Error.module.css";

const Error = (props) => {
  //console.log("error 404");
  return (
    <div className={style.divError}>
      <h1>Error 404</h1>
      <h2>{props.error}</h2>
    </div>
  );
};

export default Error;
