import React from "react";

function Tickler({onClick}) {
  function tickle() {
    console.log("Teehee!");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
