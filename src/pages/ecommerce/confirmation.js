import React from "react"
import Layout from "../../components/layout"
import {Link} from "gatsby"
import Button from '../../components/elements/button'
import styles  from "./confirmation.module.scss"


export default class Confirmation extends React.Component {
    render(props){
        return(
            <Layout footerSize='big'>
                {/* <Header class="header-home" style={{backgroundColor: 'teal'}} headerText="Usabilla Live Demo"/> */}
                <div className="ub-jumbotron">
                    <div className="ub-lead">
                        <h1 className="ub-header">Your Order is confirmed!</h1>
                        <h3 className="ub-sub-header">You'll receive your package soon!</h3>
                    </div>            
                </div>
                <div className="ub-section_home" >
                    <div className={"ub-section_container " + styles.links}>
                        <Link to="/">Back to home</Link>
                    </div>
                </div>
            </Layout>
        )
    }
};
