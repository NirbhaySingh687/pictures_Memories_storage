import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {applyMiddleware, compose, createStore} from "redux";
import { Provider } from "react-redux"
import reducer from "./Redux/Reducers"
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import thunk from "redux-thunk";
const store = createStore(reducer, compose( applyMiddleware(thunk)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
