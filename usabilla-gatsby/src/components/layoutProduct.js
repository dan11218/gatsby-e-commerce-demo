import React, {Component} from 'react';
import NavBar from './navbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap-grid.min.css';


export default (props) => {
    return(
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}