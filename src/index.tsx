import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Globalstyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Globalstyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
