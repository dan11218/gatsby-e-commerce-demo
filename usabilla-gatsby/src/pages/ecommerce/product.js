import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layoutCheckout"
import Product from "../../components/singleProduct"

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/cart/' footerPrevPage='/ecommerce/shop/' footerPageNumber='2'>
        <Product/>
    </Layout>
)