import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import Button from '../components/elements/button'


export default class App extends React.Component {
    render(props){
        return(
            <Layout footerSize='big'>
                {/* <Header class="header-home" style={{backgroundColor: 'teal'}} headerText="Usabilla Live Demo"/> */}
                <div className="ub-jumbotron">
                    <div className="ub-lead">
                        <h1 className="ub-header">Usabilla Live Demo</h1>
                        <h3 className="ub-sub-header">Explore how Usabilla works!</h3>
                        <Link to="/ecommerce/shop/">
                            <Button text="Start the Demo" fill="yes" color="blue"></Button>
                        </Link>
                    </div>            
                </div>
                <div className="ub-section_home" >
                    <div className="ub-section_container">
                        <h4 style={styles.sectionHeader}>Listen to your users during their online shopping experience</h4>
                        <p>See how Usabilla can help you improve your checkout flow</p>
                        <Link to="/ecommerce/shop/">
                            <Button text="Start the Demo" fill="yes" color="blue">
                            </Button>
                        </Link>
                    </div>
                </div>
            </Layout>
        )
    }
};

const styles = {
    sectionHeader: {
        color: 'white',
        fontFamily: 'MiloWebBold',
        fontSize: '1.5rem'
    }
}