import React from "react"
import Layout from "../../components/layout"
import ListItem from "../../components/product/listItem"
import styles from "./cart.module.scss"


export default () => (
    <Layout footerNextPage='/ecommerce/login/' footerPageNumber='3' footerPrevPage='/ecommerce/product/'>
        <div className={styles.container}>
            <div className={"container"}>
                <div className='row'>
                    <div className='col-7'>
                        <h1>CART (0)</h1>
                        <ListItem name={"Shirt"} image={require('../../../static/assets/shirt.png')} price={'€30,00'} description={"100% cotton"}/>
                        <ListItem name={"Hoodie"} image={require('../../../static/assets/hoodie.png')} price={'€30,00'}/>
                        <ListItem name={"Planner"} image={require('../../../static/assets/planner.png')} price={'€30,00'}/>
                        <ListItem name={"Hoodie"} image={require('../../../static/assets/coffee.png')} price={'€30,00'}/>
                    </div>
                    <div className='col-5' style={css.subtotal}>
                        <p>Your total</p>
                        <p>Subtotal: </p>
                        <p>Shipping: </p>
                    </div>
                </div>
            </div> 
        </div>
    </Layout>
)

const css = {
    subtotal: {
        backgroundColor: '#00a6ca',
        borderRadius: '7px',
        color: 'white',
        height: '400px'
    }
}