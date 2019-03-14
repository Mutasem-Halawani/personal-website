import React from "react"
import Availability from "./Availability"

function Work(props) {
  return (
		<section className="main__section" id="contact">
			<h3>
				Get in touch
			</h3>
			<p className="text">
				* Whether you need a personal website, a CRM website, E-commerce, or a single page application.
			</p>
			<form className="form">
				<div className="form__input-wrapper">
					<input type="text" placeholder="name"/>
					<input type="email" placeholder="email"/>
				</div>
				<textarea placeholder="message" rows="4">
				</textarea>
				<button className="btn box-effect">
					Send
				</button>
			</form>
			<Availability>
			</Availability>
		</section>
  )
}

export default Work
