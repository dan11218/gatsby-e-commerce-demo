import React from "react"
import {Link} from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header"
import styles from "./checkout.module.scss"
import Form from "../../components/checkout/form"
import Delivery from "../../components/checkout/delivery"

export default class Checkout extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			firstName: "",
			lastName: "",
			isSelected: null,
			view: <Form />,
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(event) {
		this.setState(state => ({view: event}))
		console.log(event)
	}

	render(){ 
		return (
			<Layout footerSize='small' footerNextPage='/' footerPageNumber='6' footerPrevPage='/ecommerce/account/'>
				<div className={styles.checkout}>
					<div className="row">
						<div className={`col-7`}>
							<div className={`row ${styles.tabs}`}>
								<h4 className="col" onClick={() => this.handleClick(<Form />)}>Personal Details</h4>
								<h4 className="col" onClick={() => this.handleClick(<Delivery />)}>Delivery Options</h4>
								<h4 className="col" onClick={() => this.handleClick(<Form />)}>Payment</h4>
							</div>
							{/*Conditional Component*/}
							{this.state.view}
						</div>
						<div className="col-4">
							<div className={styles.info}>
							<div className="row">
								<h3>YOUR ORDER</h3>
								<div className="col-9">
									<p>Subtotal: </p>
									<p>Shipping: </p>
								</div>
								<div className="col-3">
									<p>€135,00</p>
									<p>€2,90</p>
								</div>
								</div>
								<Link to="/ecommerce/confirmation/"><h3>CONFIRM ORDER</h3></Link>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}