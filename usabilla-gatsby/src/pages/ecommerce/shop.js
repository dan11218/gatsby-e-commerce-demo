import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layoutProduct"
import Product from "../../components/productCard"
import heroImage from "../../../static/assets/Hero_image.png"

// TODO: Work on Header component, make font and color of text modular

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/product' footerPrevPage='/' footerPageNumber='1'>
        <div>
            <div style={styles.jumbotron}>
                <div style={styles.productHeader}>
                    <Header class="bold" headerText="E-Commerce Simulation" />
                    <Header class="light" headerText="The online shopping experience" />
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <Product image={require('../../../static/assets/coffee.png')} name={"Usabilla Coffee"} description={"Intense Blend"} price={"€18.00"} />
                    <Product image={require('../../../static/assets/hoodie.png')} name={"Usabilla Hoodie"} description={"Blue | 100% cotton"} price={"€50.00"} />
                    <Product image={require('../../../static/assets/shirt.png')} name={"Usabilla T-Shirt"} description={"Grey | 100% Cotton"} price={"€30.00"} />
                    <Product image={require('../../../static/assets/canvas-tote-bag.png')} name={"Canvas Bag"} description={"White"} price={"€14.00"} />
                    <Product image={require('../../../static/assets/pen.png')} name={"Pen"} description={"Black | Ballpoint"} price={"€10.00"} />
                    <Product image={require('../../../static/assets/planner.png')} name={"Planner"} description={"Black"} price={"€13.00"} />
                </div>
            </div>
        </div>
    </Layout>
);

const styles = {
    jumbotron: {
        backgroundImage: `url(${heroImage})`,
        height: '500px',
        backgroundSize: 'cover',
    },
    productHeader: {
        margin: '0 30px 0',
        position: 'relative',
        top: '50%',
        width: '500px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 166, 202, 0.9)',
        padding: '.5rem',
        borderRadius: '15px',
    }
}