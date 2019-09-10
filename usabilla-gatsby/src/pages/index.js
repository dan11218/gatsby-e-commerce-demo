import React from "react"
import {rhythm} from "../utils/typography"
import Header from "../components/header"
import Layout from "../components/layout"
import {Link} from "gatsby"
import Button from '../components/button'


export default () => (
    <Layout footerSize='big'>
        <div style={{color: `teal`}}>
            <Header headerText="Usabilla Live Demo"/>

            <p>Explore how Usabilla works</p>

            <Button to="/ecommerce/shop/" text="Start the demo <-- Inspect me, i'm a self-defined button component, yet without any styling for now" fill="yes" color="blue"></Button>
        </div>
    </Layout>
)