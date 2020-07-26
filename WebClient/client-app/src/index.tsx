import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import App from "./components/App";
import configureStore, { saveToLocalStorage } from "./redux/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();
store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
