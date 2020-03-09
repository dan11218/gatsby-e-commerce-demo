import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layoutCheckout"
import ListItem from "../../components/listItem"


export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/login/' footerPageNumber='3' footerPrevPage='/ecommerce/product/'>
        <div className='container'>   
            <div style={{color: `teal`}}>
            </div>
            <div className='row'>
                <div className='col-7'>
                    <p>MY SHOPPING CART</p>
                    <ListItem name={"Shirt"} image={require('../../../static/assets/shirt.png')} price={30} description={"100% cotton"}/>
                    <ListItem name={"Hoodie"} image={require('../../../static/assets/hoodie.png')} price={30}/>
                    <ListItem name={"Planner"} image={require('../../../static/assets/planner.png')} price={30}/>
                    <ListItem name={"Hoodie"} image={require('../../../static/assets/coffee.png')} price={30}/>
                </div>
                <div className='col-5' style={styles.subtotal}>
                    <p>Subtotal</p>
                </div>
            </div>
        </div> 
    </Layout>
)

const styles = {
    subtotal: {
        backgroundColor: '#00a6ca',
        borderRadius: '10px',
        color: 'white',
        height: '400px'
    }
}