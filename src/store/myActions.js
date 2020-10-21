import {createActions} from 'redux-actions';

export const {loadData, setIsSelected} = createActions({
    LOAD_DATA: () => ({}),
    SET_IS_SELECTED: (id, newIsSelected) => ({id, newIsSelected})
});