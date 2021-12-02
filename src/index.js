import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout'
import reducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Sample from './components/Sample';

const saveToLocalStorage = (reduxGlobalState) => {
  //serialization = converting js object to string
  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    sessionStorage.setItem('state', serializeState)
  }
  catch(err){
    console.log(err)
  }
}

const loadFromLocalStorage = () => {
  //deserialization = converting string to an object
  const state = sessionStorage.getItem('state');
  if(state == null){
    return undefined;
  } else {
    return JSON.parse(state)
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  //happens everytime there is a change to global state
  saveToLocalStorage(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/sample" element={<Sample />} />
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


