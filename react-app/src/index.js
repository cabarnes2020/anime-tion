import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import configureStore from "./store";
import SearchProvider from "./context/SearchContext"
import ModalProvider from "./context/ModalContext"

const store = configureStore();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
