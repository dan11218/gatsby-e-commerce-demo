import React from 'react';
import productCard from './productCard.module.scss';

export default (props) => {
    return(
        <div className={productCard.card}>
            <img alt={"placeholder"} className={productCard.image} src={props.image} />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}