import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";

function App() {
  function handleClick() {
    console.log("click");
  }
  return (
    <div>
      <h3>onClick</h3>
      <Tickler onClick = {handleClick}/> 
      {/* haijawork */}
      <hr />

      <MultiButton />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp />
      <hr />

      <h3>onSubmit</h3>
      <Login />
      <hr />
    </div>
  );
}

export default App;
