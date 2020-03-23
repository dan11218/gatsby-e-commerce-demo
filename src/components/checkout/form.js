import React from "react"
import styles from "./form.module.scss"

export default class Form extends React.Component {
	state = {
		firstName: "",
		lastName: "",
	}

	handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
	}

	handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
	
	render(){
		return (
			<div className="container">
				<form className={styles.form} onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-6">
							<label>
								<input
									type="text"
									name="firstName"
									placeholder="First Name"
									value={this.state.firstName}
									onChange={this.handleInputChange}
									className={styles.input}
								/>
							</label>
						</div>
						<div className="col-2">
							<label>
								<input
									type="text"
									name="lastName"
									placeholder="Last Name"
									value={this.state.lastName}
									onChange={this.handleInputChange}
									className={styles.input}
								/>
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col-6">
							<label>
								<input
									type="text"
									name="firstName"
									placeholder="Street Address"
									value={this.state.firstName}
									onChange={this.handleInputChange}
									className={styles.input}
								/>
							</label>
						</div>
						<div className="col-2">
							<label>
								<input
									type="text"
									name="lastName"
									placeholder="Postal Code"
									value={this.state.lastName}
									onChange={this.handleInputChange}
									className={styles.input}
								/>
							</label>
						</div>
					</div>
				</form>
			</div>
		)
	}
}