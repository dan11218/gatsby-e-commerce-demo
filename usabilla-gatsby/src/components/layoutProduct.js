import React, {Component} from 'react';
import NavBar from './navbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// TODO create new navbar component for this page


export default (props) => {
    return(
        <div>
            <NavBar />
            {props.children}
            <Footer footerSize={props.footerSize} pageNumber={1} nextPage={props.footerNextPage} previousPage={props.footerPrevPage}  />
        </div>
    )
}