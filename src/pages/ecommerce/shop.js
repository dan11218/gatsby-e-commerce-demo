import React from "react"
// import {css} from "@emotion/core"
import {Link} from "gatsby"
// import {rhythm} from "../../utils/typography"
import Header from "../../components/header"
import Layout from "../../components/layoutProduct"
import Product from "../../components/product/productCard"
import heroImage from "../../../static/assets/Hero_image.png"
import styles from "./shop.module.scss"

export default props => (
    <Layout footerSize='small' footerNextPage='/ecommerce/product' footerPrevPage='/' footerPageNumber='1'>
        <div className={styles.shop}>
            <div className={styles.jumbotron}>
                <div className={styles.header}>
                    <h1>E-Commerce Simulation</h1>
                    <h2>The online shopping experience</h2>
                </div>
            </div>
            <div>
            <form className={styles.form}>
                <label>
                    <input className={styles.input} type="text" name="field" placeholder="Search..." />
                </label>
                <img alt="placeholder" className={styles.search} src={require('../../../static/assets/search.png')} />
            </form>
            </div>
            <div className="container">
                <div className='row'>
                    <div className="col">
                    <Link to= "/ecommerce/products/coffee/">
                        <Product image={require('../../../static/assets/coffee.png')} name={"Usabilla Coffee"} description={"Intense Blend"} price={"€18.00"} />
                    </Link>
                    <Link to= "/ecommerce/products/hoodie/">
                        <Product image={require('../../../static/assets/hoodie.png')} name={"Usabilla Hoodie"} description={"Blue | 100% cotton"} price={"€30.00"} />
                    </Link>
                    </div>
                    <div className="col">
                    <Link to= "/ecommerce/products/shirt/">
                        <Product image={require('../../../static/assets/shirt.png')} name={"Usabilla T-Shirt"} description={"Grey | 100% Cotton"} price={"€25.00"} />
                    </Link>
                    <Link to= "/ecommerce/products/canvas-tote-bag/">
                        <Product image={require('../../../static/assets/canvas-tote-bag.png')} name={"Canvas Bag"} description={"White"} price={"€14.00"} />
                    </Link>
                    </div>
                    <div className="col">
                    <Link to= "/ecommerce/products/pen/">
                        <Product image={require('../../../static/assets/pen.png')} name={"Pen"} description={"Black | Ballpoint"} price={"€10.00"} />
                    </Link>
                    <Link to= "/ecommerce/products/planner/">
                        <Product image={require('../../../static/assets/planner.png')} name={"Planner"} description={"Black"} price={"€13.00"} />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

