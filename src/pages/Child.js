import React from "react";

function Child(props) {
  console.log(props);
  return (
    <>
      <div>{props.test}</div>
      <button onClick={props.change}>cccc</button>
    </>
  );
}

export default Child;
