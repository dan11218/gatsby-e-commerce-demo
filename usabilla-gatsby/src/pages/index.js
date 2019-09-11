import React from "react"
import {rhythm} from "../utils/typography"
import Header from "../components/header"
import Layout from "../components/layout"
import {Link} from "gatsby"
import Button from '../components/button'


export default () => (
    <Layout footerSize='big'>
        {/* <Header class="header-home" style={{backgroundColor: 'teal'}} headerText="Usabilla Live Demo"/> */}
        <div className="jumbotron">
            <div className="lead">
                <h1 className="header">Usabilla Live Demo</h1>
                <h3 className="sub-header">Explore how Usabilla works!</h3>
                <Button to="/ecommerce/shop/" text="Start the Demo" fill="yes" color="blue"></Button>
            </div>            
        </div>
        <div className="section_home" >
            <div className="section_container">
                <h4 style={styles.sectionHeader}>Listen to your users during their online shopping experience</h4>
                <p>See how Usabilla can help you improve your checkout flow</p>
                <Button to="/ecommerce/shop/" text="Start the Demo" fill="yes" color="blue"></Button>
            </div>
        </div>
    </Layout>
)

const styles = {
    sectionHeader: {
        color: 'white',
        fontFamily: 'MiloWebBold',
        fontSize: '1.5rem'
    }
}