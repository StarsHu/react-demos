import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from '../reducers'
import App from '../containers/app'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// const store = createStore(reducers);
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('test2')
);

render();