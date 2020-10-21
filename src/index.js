import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';

import App from './components/App';

import {Provider} from 'react-redux';
import {initStore} from './store/store';
import {loadData} from './store/myActions';

const store = initStore();
store.dispatch(loadData());

ReactDom.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>, document.getElementById('root')
);