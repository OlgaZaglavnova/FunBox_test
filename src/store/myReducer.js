import {handleActions} from 'redux-actions';
import {loadData, setIsSelected} from './myActions';

const dataCats = require('./data.json');

const defaultState = {
    data: {}
};

export default handleActions({
    [loadData]: (state) => {
        return {
            ...state,
            data: dataCats,
            defaultValue: {}
        }
    },
    [setIsSelected]: (state, {payload: {id, newIsSelected}}) => {
        // console.log('myReducer setIsSelected is, newIsSelected=', id, newIsSelected);
        return {
            ...state,
            data: {...state.data,
                catFoods: state.data.catFoods.map((n) => (n.id === id) 
                    ? {...n,
                    isSelected: newIsSelected
                    }
                    : {...n}
                )
            }
        }
    }
}, defaultState);