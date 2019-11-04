import React, {Fragment, Component} from 'react';
import productCard from './productCard.module.scss';

export default (props) => {
    return(
        <div className={productCard.card} className='col-xs-12 col-sm-6 col-md-4'>
            <img className={productCard.image} src={props.image} />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}