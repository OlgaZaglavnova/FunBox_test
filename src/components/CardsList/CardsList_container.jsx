import React from 'react';
import {connect} from 'react-redux';

import {CardsList_Component} from './CardsList_Component';

const mapStateToProps = ({myReducer}, props) => {
    return {
        catFoods: myReducer.data.catFoods
    }
};

export default connect(mapStateToProps)(CardsList_Component);