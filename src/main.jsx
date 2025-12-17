import { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
/* import { createRoot } from "react-dom/client"; */
import "./index.css";
import { store } from './api/store';
import App from "./app";
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
