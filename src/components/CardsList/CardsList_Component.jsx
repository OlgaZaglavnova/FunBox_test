import React from 'react';
import './CardsList.scss';

import Card from '../Card/Card_container';


export const CardsList_Component = ({catFoods}) => {

    // console.log('CardsList_Component catFoods=', catFoods);

    return (
        <div className="cardsList">
            {catFoods.map((food, idx) => {
                return (<Card food={food} key={idx}/>)
            })}
        </div>
    )
};