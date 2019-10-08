import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layoutProduct"
import Product from "../../components/productCard"

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
                    <Product image={require('../../../static/assets/logo/coffee.jpg')} name={"T-Shirt"} />
                    <Product image={require('../../../static/assets/logo/coffee.jpg')} name={"Mug"} />
                    <Product image={require('../../../static/assets/logo/coffee.jpg')} name={"Hoodie"} />
                    <Product image={require('../../../static/assets/logo/coffee.jpg')} name={"Pens"} />
                    <Product image={require('../../../static/assets/logo/coffee.jpg')} name={"Coffee"} />
                    <Product image={require('../../../static/assets/logo/coffee.jpg')} name={"Notebook"} />
                </div>
            </div>
        </div>
    </Layout>
);

const styles = {
    jumbotron: {
        backgroundImage: `url(${"https://usabilla.com/img/voc/voc-header.jpg"})`,
        height: '500px',
    },
    productHeader: {
        margin: '0 30px 0',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    }
}