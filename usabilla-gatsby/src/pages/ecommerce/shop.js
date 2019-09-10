import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layout"

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/product' footerPrevPage='/' footerPageNumber='1'>
        <div style={{color: `teal`}}>
            <Header headerText="This it the shop where you can browse items"/>

            <p>It really is</p>
        </div>
    </Layout>
)