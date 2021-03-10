import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import configureStore from "./store";
import SearchProvider from "./context/SearchContext"


const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
