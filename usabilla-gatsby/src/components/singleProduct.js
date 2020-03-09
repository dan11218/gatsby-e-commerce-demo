import React from "react"
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import productStyles from './productPage.module.scss'
import {Link} from "gatsby"
import Button from '../components/button'
import shirt from '../../public/assets/shirt.png'



export default props => {

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <p>T-shirt</p>
                        <p>Small t-shirts</p>
                        <img src={shirt} style={{width: '200px'}} />
                    </div>
                    <div className='col-7'>
                        <p>Usabilla t-shirt, 30 euro</p>
                        <p>100% cotton</p>
                        <p>reviews, questions, answers</p>
                        <p> Select your color</p>
                        <p> choose your size</p>
                        <Link> <Button color='blue' to='/ecommerce/cart/' fill='yes' text='Add to Cart' ></Button></Link>

                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p>Product details</p>
                        <p>Soon to be your favorite lucky shirt...</p>
                    </div>
                </div>

            </div>
            <div className={`container-fluid ${productStyles.featureBar}`}>
                <div className='row'>
                    <div className='col-4'>
                        <img src={'/assets/logo/Usabilla-bySVMK.svg'} alt={'usabilla logo'}/>
                        <p>
                            Free worldwide shipping
                        </p>
                    </div>
                    <div className='col-4'>
                        <img src={'/assets/logo/Usabilla-bySVMK.svg'} alt={'usabilla logo'}/>
                        <p>
                            Easy 60-days exchanges and returns
                        </p>
                    </div>
                    <div className='col-4'>
                        <img src={'/assets/logo/Usabilla-bySVMK.svg'} alt={'usabilla logo'}/>
                        <p>
                            24/7 customer support
                        </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p>
                            DO THE FIRST STEP
                        </p>
                        <p>
                            Subscribe to our newsletter and get a €10 discount on your first order. And then you can read the news and stories about the world of Usabilla.
                        </p>
                        <p>
                            Your email addres....
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>


    )
}