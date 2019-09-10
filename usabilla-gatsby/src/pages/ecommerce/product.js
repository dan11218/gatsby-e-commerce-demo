import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layout"

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/cart/' footerPrevPage='/ecommerce/shop/' footerPageNumber='2'>
        <div style={{color: `teal`}}>
            <Header headerText="This will hold the info of a single product"/>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)