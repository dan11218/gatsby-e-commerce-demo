import React from 'react'

export default (props) => {
   return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src={props.image} />
                </div>
                <div className='col'>
                    <p>{props.name} {props.price}€</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}