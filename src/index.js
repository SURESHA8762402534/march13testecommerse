import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDom.render(
   
   <React.StrictMode>
   {/* <BrowserRouter> */}
   <Provider store={store}>
        <App/>
   </Provider>
   {/* </BrowserRouter> */}
 </React.StrictMode>,
    document.getElementById('root')
)