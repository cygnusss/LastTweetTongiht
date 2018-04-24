import React from "react";
import { render } from "react-dom";

import Home from "./Home/Home.jsx";

const Application = () => (
  <div>
    <Home />
  </div>
);

const ROOT = document.getElementById("root");
render(<Application />, ROOT);