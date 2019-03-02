import React from "react"
import Availability from "./Availability"

function Work(props) {
  return (
		<section className="main__section" id="contact">
			<p>
				Whether you need a personal website, a CRM website, E-commerce, or a single page application.
			</p>
			<form>
				<input type="text" placeholder="name"/>
				<input type="email" placeholder="email"/>
				<textarea rows="4" cols="50">
				</textarea>
			</form>
			<Availability>
			</Availability>
		</section>
  )
}

export default Work
