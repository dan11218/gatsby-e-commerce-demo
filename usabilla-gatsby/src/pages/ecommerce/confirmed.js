import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Layout from "../../components/layout"
import Header from "../../components/header"

export default () => (
    <Layout footerSize='small' footerNextPage='/' footerPageNumber='6' footerPrevPage='/ecommerce/account/'>
        <div style={{color: `teal`}}>
            <Header headerText="A static page with a link"/>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)