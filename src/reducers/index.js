import { combineReducers } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Images from "../components/carousel/available-properties";

ReactDOM.render(
  <Images />, 
  document.querySelector(".app-wrapper")
);
const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;