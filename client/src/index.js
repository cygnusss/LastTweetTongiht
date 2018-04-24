import React from "react";
import { render } from "react-dom";

const Application = () => (
  <div>
    React has been initialized!
  </div>
);

const ROOT = document.getElementById("root");
render(<Application />, ROOT);