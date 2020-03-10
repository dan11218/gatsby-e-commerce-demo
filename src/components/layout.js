import React from "react"
import NavBar from './navigation/navbar'
import Footer from './navigation/footer'

export default (props) => {

    return (
        <div style={{margin: `none`, maxWidth: '100%'}}>
            <NavBar></NavBar>
            {props.children}
            <Footer footerSize={props.footerSize} nextPage={props.footerNextPage} previousPage={props.footerPrevPage} pageNumber={props.footerPageNumber}></Footer>

        </div>
    )
}