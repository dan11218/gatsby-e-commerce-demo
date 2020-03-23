import React from "react"
import {Link} from "gatsby"
import usabillaLogo from '../../../static/assets/logo/Usabilla-bySVMK-white.svg';
import styles from './navbar.module.scss'

export default props => {
  return(
    <div className={styles.header}>
        <div className="row">
            <div className="col">
                <Link to="/" style={{textShadow: `none`, backgroundImage: `none`}}>
                    <img alt="logo" src={usabillaLogo} className={styles.logo}/>
                </Link>
            </div>
            <div className={"col"}>
                <div className={`row ${styles.links}`}>
                    <div className="col">
                        <Link to="/"><p>Home</p></Link>
                    </div>|
                    <div className="col">
                        <Link to="/ecommerce/shop/"><p>Shop</p></Link>
                    </div>|
                    <div className="col">
                        <Link to="/ecommerce/cart/"><p>Cart</p></Link>
                    </div>|
                    <div className="col">
                        <Link to="/ecommerce/checkout/"><p>Checkout</p></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}