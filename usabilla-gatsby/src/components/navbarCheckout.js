import React from "react"
import {Link} from "gatsby"
import {graphql, useStaticQuery} from "gatsby";
import navbarStyles from "./navbarCheckout.module.scss"




export default props => {
    const ListLink = props => (
        <li style={{display: `inline-block`, marginRight: `1rem`}}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )

    const usabillaLogo = 'Usabilla-bySVMK.svg'
    if (props.logoColor === "white"){
        const usabillaLogo = 'Usabilla-bySVMK-white.svg'
    }


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

    return(
    <header style={{marginBottom: `1.5rem`, borderBottom: `solid 2px #e5eaee`}}>
        <ul style={{listStyle: `none`, display: `block`, position: `absolute`, right: `0`}}>
            <ListLink to="https://support.usabilla.com/">Help & Support</ListLink>
            <ListLink to="https://console.usabilla.com/">Login</ListLink>
            <ListLink to="/">Basket</ListLink>
        </ul>
        <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
            <img className={navbarStyles.navigationLogo} src={'/assets/logo/' + usabillaLogo} alt={'usabilla logo'}/>
        </Link>

    </header>
    )
}