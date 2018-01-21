import "babel-polyfill";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/allReducers";

import Wrapper from "./Wrapper/wrapper";

const store = createStore (allReducers);

ReactDOM.render(
	<Provider store={store}>
  		<Wrapper />
   </Provider>,
  document.getElementById('fieldToShow')
);