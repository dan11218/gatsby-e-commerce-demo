import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default (props) => {

    return (
        <div style={{margin: `none`, maxWidth: '100%'}}>
            <NavBar></NavBar>
            {props.children}
            <Footer footerSize={props.footerSize} nextPage={props.footerNextPage} previousPage={props.footerPrevPage} pageNumber={props.footerPageNumber}></Footer>

        </div>
    )
}