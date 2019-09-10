import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layout"


export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/login/' footerPageNumber='3' footerPrevPage='/ecommerce/product/'>
        <div style={{color: `teal`}}>
            <Header headerText="This shows all the items in the cart, which can be statically coded to be a single t-shirt"/>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)