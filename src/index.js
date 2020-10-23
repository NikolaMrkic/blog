import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import { createBrowserHistory } from "history";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import rootSaga from "./redux/sagas/index";
import configureStore from "./redux/store";

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);
store.runSaga(rootSaga);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);
serviceWorker.unregister();
