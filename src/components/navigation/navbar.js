import React from "react"
import {Link} from "gatsby"
import usabillaLogo from '../../../static/assets/logo/Usabilla-bySVMK-white.svg';
import styles from './navbar.module.scss'

export default props => {
  const ListLink = props => (
      <li style={{display: `inline-block`, marginRight: `1rem`}}>
          <Link to={props.to}>{props.children}</Link>
      </li>
  )

  return(
    <header className={styles.header}>
        <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
            <img src={usabillaLogo} style={{width: '100px', margin: '10px 50px'}}/>
        </Link>
        <ul className={styles.links}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/ecommerce/shop/">Shop</ListLink>
            <ListLink to="/ecommerce/about/">About</ListLink>
            <ListLink to="/ecommerce/contact/">Contact</ListLink>
            <ListLink to="/ecommerce/cart/">Cart</ListLink>
            <ListLink to="/ecommerce/support/">Help & Support</ListLink>
        </ul>
    </header>
  )
}