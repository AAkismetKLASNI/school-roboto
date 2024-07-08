import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store.js';
import { Provider } from 'react-redux';
import axios from 'axios';
import './index.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5500';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
);
