import React from 'react'

export default (props) => {
   return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <img width={"90px"} alt="list-item" src={props.image} />
                </div>
                <div className="col">
                    <div className="row">
                        <div className='col-8'>
                            <h3>{props.name}</h3>
                            <p>{props.description}</p>
                            <p>{props.color}</p>
                            <p>{props.size}</p>
                        </div>
                        <div className='col-4'>
                            <p>{props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}