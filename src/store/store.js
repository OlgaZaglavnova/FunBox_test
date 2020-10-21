import {createStore, combineReducers} from 'redux';
import myReducer from './myReducer';

const reducer = combineReducers({
    myReducer
});

export const initStore = (preloadedState = {}) => {
    return createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};