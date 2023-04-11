import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./Redux/Store";
import {Provider} from "react-redux";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import './components/Modals/EditCardModal/Popovers/Date/DateRange.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,

);

