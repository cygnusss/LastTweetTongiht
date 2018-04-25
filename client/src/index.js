import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import Application from "./components/Application.jsx";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const ROOT = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Application />
  </Provider>, 
  ROOT
);