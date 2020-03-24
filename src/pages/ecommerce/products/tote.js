import React from "react"
import Layout from "../../../components/layout"
import tote from "../../../../static/assets/canvas-tote-bag.png"
import styles from "./product.module.scss"

export default props => 
	<Layout>
		<div className={`container ${styles.product}`}>
			<div className={"row"}>
				<div className={"col-5"}>
					<img alt="product" src={tote} width={"300px"}/>
				</div>
				<div className={"col-7"}>
					<h1>CANVAS TOTE BAG</h1>
					<h3>100% Cotton</h3>
					<h3>€14.00</h3>
				</div>
			</div>
			<div className={"row"}>
				<h3>Product Details</h3>
				<p>Live-edge mumblecore readymade stumptown glossier shaman man bun hella cardigan celiac adaptogen scenester. Letterpress single-origin coffee pabst, enamel pin brooklyn hell of pork belly green juice air plant street art truffaut.</p>
			</div>
		</div>
	</Layout>