import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './theme';

import './styles/index.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const ThemeWrappedApp = ThemeProvider(App);

ReactDOM.render(<ThemeWrappedApp />, document.getElementById('root'));
registerServiceWorker();
