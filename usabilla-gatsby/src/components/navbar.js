import React from "react"
import {Link} from "gatsby"
import {graphql, useStaticQuery} from "gatsby";
import usabillaLogo from '../../static/assets/logo/Usabilla-bySVMK-white.svg';

export default props => {
  const ListLink = props => (
      <li style={{display: `inline-block`, marginRight: `1rem`}}>
          <Link to={props.to}>{props.children}</Link>
      </li>
  )

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
    <header style={{background: '#03a6c9'}}>
        <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
            {/* <h3 style={{display: `inline`}}>{data.site.siteMetadata.title}</h3> */}
            <img src={usabillaLogo} style={{width: '100px', margin: '10px 50px'}}/>
        </Link>
        <ul style={{display: 'flex', listStyle: `none`, float: `right`}}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </header>
  )
}