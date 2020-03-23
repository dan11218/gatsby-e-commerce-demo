import React from "react"
import {Link} from "gatsby"
import styles from "./footer.module.scss"
import usabillaLogo from '../../../static/assets/logo/Usabilla-bySVMK.svg';

export default props => {  
    return (
        <footer className={styles.footer}>
                <div id="navigation" className={`row ${styles.link}`}>
                    <div className="col-4">
                        <Link to="/">
                            <img alt="logo" src={usabillaLogo} style={{width: '100px', margin: '10px 50px'}}/>
                        </Link>
                    </div>
                    <div className={"col-3"}>
                        <h4>About</h4>
                        <a href="https://usabilla.com/team/"><p>Our Team</p></a>
                        <a href="https://jobs.usabilla.com/"><p>Careers</p></a>
                        <a href="https://usabilla.com/contact/"><p>Contact Us</p></a>
                    </div>
                    <div className={"col-3"}>
                        <Link to="/ecommerce/contact/"><h4>Customers</h4></Link>
                        <a href="https://usabilla.com/team/"><p>Our Team</p></a>
                        <a href="https://jobs.usabilla.com/"><p>Careers</p></a>
                    </div>
                    <div className={"col-2"}>
                        <h4>Support</h4>
                        <a href="https://usabilla.com/team/"><p>Our Team</p></a>
                        <a href="https://jobs.usabilla.com/"><p>Careers</p></a>
                    </div>
                </div>

                <div className={`row ${styles.social}`}>
                    <div className={"col-sm"}><p>Facebook</p></div>
                    <div className={"col-sm"}><p>Instagram</p></div>
                    <div className={"col-sm"}><p>Twitter</p></div>
                </div>

                <div className={"row"}>
                    <div className={`col ${styles.tagline}`}>
                    <h3>THE STANDARD IN USER FEEDBACK</h3>
                    </div>
                </div>
        </footer>
    );
};