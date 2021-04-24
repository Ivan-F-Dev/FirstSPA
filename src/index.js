import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from "./redux/redux-store";
import SamuraiJSApp from "./App";


ReactDOM.render(
    <SamuraiJSApp store={store}/>
    , document.getElementById('root')
);

/*<BrowserRouter>
    <React.StrictMode>
        <Provider store={store}>
            <App store={store}/>
        </Provider>
    </React.StrictMode>
</BrowserRouter>, document.getElementById('root'));*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
