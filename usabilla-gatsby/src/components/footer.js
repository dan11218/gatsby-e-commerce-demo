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
                <Link to={next}> <Button color='blue' filled='yes' text='Next page'></Button></Link>
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
                <a href="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                    <h3 style={{display: `inline`}}>Usabilla by Surveymonkey</h3>
                </a>
                <ul style={{listStyle: `none`}}>
                    <p>About</p>
                    <a href="/">About</a>
                    <a href="/about/">Our Team</a>
                    <a href="/contact/">Career</a>
                    <a href="/">Contact Us</a>
                    <a href="/about/">Press</a>

                </ul>
                <ul style={{listStyle: `none`}}>
                    <p>Customers</p>
                    <a href="/">Success Stories</a>
                    <a href="/about/">Our Customers</a>
                </ul>
                <ul style={{listStyle: `none`}}>
                    <p>About</p>
                    <a href="/">Support</a>
                    <a href="/about/">System Status</a>
                </ul>
            </footer>
        )
    }
}