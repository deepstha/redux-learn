import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore as createStore } from 'redux'




//Store Globalized State

//Action Increment

const increment =  () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement =  () => {
  return {
    type: 'INCREMENT'
  }
}

//REDUCER
const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECRREMENT":
      return state - 1;
  }

  let store  =  createStore(counter);

  //Display it in the console
  store.subscribe(() => console.log(store.getState()));

  //Dispatch
  store.dispatch(increment());
  store.dispatch(decrement());
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
