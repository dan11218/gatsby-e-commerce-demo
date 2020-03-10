import React from "react"
import Header from "../../components/header"
import Layout from "../../components/layout"

export default () => (
    <Layout footerSize='small' footerNextPage='/ecommerce/product' footerPageNumber='1' footerPrevPage='/'>
        <div style={{color: `teal`}}>
            <Header headerText="This is where we will see the 'no results for this search query' thing"/>

            <p>It really is</p>
        </div>
    </Layout>
)