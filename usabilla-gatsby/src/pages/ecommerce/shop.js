import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layoutProduct"
import Product from "../../components/productCard"

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/product' footerPrevPage='/' footerPageNumber='1'>
        <div style={{color: `teal`}}>
            <Header headerText="E-Commerce Simulation"/>
            <div className='container'>
                <div className='row'>
                    <Product name={"T-Shirt"} />
                    <Product name={"Mug"} />
                    <Product name={"Hoodie"} />
                    <Product name={"Pens"} />
                    <Product name={"Coffee"} />
                    <Product name={"Agenda"} />

                </div>
            </div>
        </div>
    </Layout>
);

const styles = {
    productCard: {
        borderStyle: 'solid',
        borderColor: 'black',
        width: '200px',
        margin: 'auto',
        textAlign: 'center'
    },
    productImage: {
        width: '205px',
        height: '198px',
        backgroundColor: '#e1e1e1',
      },
}