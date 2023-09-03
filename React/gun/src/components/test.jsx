// BasicExample.js
import { useState } from "react";

function BasicExample() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

export default BasicExample;
