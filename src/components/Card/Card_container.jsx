import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setIsSelected} from '../../store/myActions';

import {Card_Component} from './Card_Component';

const mapStateToProps = ({myReducer}, props) => {
    //console.log('LanguageContainer', props);
    return {
        food: props.food
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setIsSelected}, dispatch);
};

const mergeProps = (stateProps, dispatchProps) => {
    // console.log('Card_container dispatchProps=', dispatchProps);
    return {
        ...stateProps,
        setIsSelected: ({id, newIsSelected}) => dispatchProps.setIsSelected(id, newIsSelected), 
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Card_Component);
//export default Card_Component;