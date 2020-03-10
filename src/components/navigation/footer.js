import React from "react"
import {Link} from "gatsby"

export default props => {
    const ListLink = props => (
        <li style={{display: `block`, marginBottom: `1rem`}}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
    
    return (
        <footer style={{marginBottom: `1.5rem`, display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
            <a href="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                <h3 style={{display: `inline`}}>Usabilla by Surveymonkey</h3>
            </a>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/ecommerce/shop">Shop</ListLink>
            <ListLink to="/ecommerce/about/">About</ListLink>
            <ListLink to="/ecommerce/contact/">Contact</ListLink>
            <ListLink to="/ecommerce/cart/">Cart</ListLink>
            <ListLink to="/ecommerce/support/">Help & Support</ListLink>
        </footer>
    );
};