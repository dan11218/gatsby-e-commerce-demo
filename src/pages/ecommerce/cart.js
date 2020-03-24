import React from "react"
import Layout from "../../components/layout"
import {Link} from "gatsby"
import ListItem from "../../components/product/listItem"
import styles from "./cart.module.scss"
import Button from "../../components/elements/button"


export default () => (
    <Layout footerNextPage='/ecommerce/login/' footerPageNumber='3' footerPrevPage='/ecommerce/product/'>
        <div className={styles.cart}>
            <div className={"container"}>
                <div className='row'>
                    <div className='col-7'>
                        <h1>CART (4)</h1>
                        <ListItem name={"T-SHIRT"} image={require('../../../static/assets/shirt.png')} price={'€50,00'} description={"100% cotton"} color={"Grey"} size={"XL"}/>
                        <ListItem name={"HOODIE"} image={require('../../../static/assets/hoodie.png')} price={'€50,00'} description={"100% cotton"} color={"Navy"} size={"XL"}/>
                        <ListItem name={"PLANNER"} image={require('../../../static/assets/planner.png')} price={'€25,00'}/>
                        <ListItem name={"COFFEE"} image={require('../../../static/assets/coffee.png')} price={'€10,00'}/>
                    </div>
                    <div className={`col-5 ${styles.subtotal}`} >
                        <h2>Your total</h2>
                        <div className="row">
                            <div className="col-9">
                                <p>Subtotal: </p>
                                <p>Shipping: </p>
                            </div>
                            <div className="col-3">
                                <p>€135,00</p>
                                <p>€2,90</p>
                            </div>
                        </div>
                        <Link to="/ecommerce/checkout/"><h3>CHECKOUT</h3></Link>
                    </div>
                </div>
            </div> 
        </div>
    </Layout>
)