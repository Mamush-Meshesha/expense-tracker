import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import "semantic-ui-css/semantic.min.css"
import App from './App';
import configureStore from "./store/configureStore"

const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


