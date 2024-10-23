import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './AuthContext';

import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';
import App from './routes/App';

import './styles/GlobalStyles.css';

ReactDOM.render(
  <ConfigProvider locale={esES}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ConfigProvider>,
  document.getElementById('app')
);
