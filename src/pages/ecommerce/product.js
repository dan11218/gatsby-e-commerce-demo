import React from "react"
import Layout from "../../components/layout"
import Product from "../../components/product/singleProduct"

export default () => (
    <Layout 
        footerSize='small' 
        footerNextPage='/ecommerce/cart/' 
        footerPrevPage='/ecommerce/shop/' 
        footerPageNumber='2'
    >
        <Product/>
    </Layout>
)