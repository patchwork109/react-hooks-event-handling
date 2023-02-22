import React from "react";

function Tickler() {
  // writing using the function keyword
  // function tickle() {
  //   console.log("Teehee!");
  // }

  // writing using an arrow function
  const tickle = (e) => {
    console.log("Teehee!");
    console.log(e);
  };

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
