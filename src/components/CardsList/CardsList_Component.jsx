import React from 'react';
import './CardsList.scss';

import Card from '../Card/Card_container';

/**
 * 
 * @param {catFoods: array of objects} Массив объектов с данными по товарам (см. файл data.json) 
 */
export const CardsList_Component = ({catFoods}) => {

   return (
        <div className="cardsList">
            {catFoods.map((food, idx) => {
                return (<Card food={food} key={idx}/>)
            })}
        </div>
    )
};