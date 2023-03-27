import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App/App';

import './styles/resets/reset.css';
import './styles/resets/normalize.css';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
