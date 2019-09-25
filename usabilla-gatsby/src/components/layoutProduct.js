import React, {Component} from 'react';
import NavBar from './navbar-shop';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

// TODO create new navbar component for this page


export default (props) => {
    return(
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}