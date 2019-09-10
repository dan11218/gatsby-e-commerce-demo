import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layout"

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/account/' footerPageNumber='4'
            footerPrevPage='/ecommerce/cart/'>
        <div style={{color: `teal`}}>
            <Header
                headerText="This is a very dumb page without any form logic and without any DB. login click will work"/>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)