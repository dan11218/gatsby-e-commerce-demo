import React from "react"
import {css} from "@emotion/core"
import {Link, graphql} from "gatsby"
import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layout"

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/confirmed/' footerPageNumber='5'
            footerPrevPage='/ecommerce/login/'>
        <div style={{color: `teal`}}>
            <Header headerText="This will have some address/delivery/payment options. Again, can all be very dumb"/>
            <p>Such wow. Very React.</p>
        </div>
    </Layout>
)