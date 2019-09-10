import React from "react"
import {Link} from "gatsby"
import {graphql, useStaticQuery} from "gatsby";
import Button from '../components/button'

export default props => {
    const ListLink = props => (
        <li style={{display: `block`, marginBottom: `1rem`}}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )

    const footerSize = props.footerSize;

    if (footerSize === 'small') {
        const prev = props.previousPage;
        const next = props.nextPage;
        const pageNumber = props.pageNumber;

        return (
            <footer>
                <Link to={prev}>Previous page</Link>
                <p>{pageNumber}/6</p>
                <Button to={next} color='blue' filled='yes' text='Next page'></Button>
            </footer>
        )

    }

    else {


        const data = useStaticQuery(
            graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
        )

        return (
            <footer style={{marginBottom: `1.5rem`, display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
                <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                    <h3 style={{display: `inline`}}>Usabilla by Surveymonkey</h3>
                </Link>
                <ul style={{listStyle: `none`}}>
                    <p>About</p>
                    <ListLink to="/">About</ListLink>
                    <ListLink to="/about/">Our Team</ListLink>
                    <ListLink to="/contact/">Career</ListLink>
                    <ListLink to="/">Contact Us</ListLink>
                    <ListLink to="/about/">Press</ListLink>

                </ul>
                <ul style={{listStyle: `none`}}>
                    <p>Customers</p>
                    <ListLink to="/">Success Stories</ListLink>
                    <ListLink to="/about/">Our Customers</ListLink>
                </ul>
                <ul style={{listStyle: `none`}}>
                    <p>About</p>
                    <ListLink to="/">Support</ListLink>
                    <ListLink to="/about/">System Status</ListLink>
                </ul>
            </footer>
        )
    }
}