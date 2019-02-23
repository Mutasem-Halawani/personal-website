import React from "react"

function Work(props) {
  return (
		<section className="main__section" id="contact">
			<p>
				Wether you need a personal website, a CRM website, E-commerce, or a single page application.
			</p>
			<form>
				<input type="text" placeholder="name"/>
				<input type="email" placeholder="email"/>
				<textarea rows="4" cols="50">
				</textarea>
			</form>
			<div className="availability">
				<h3>
					Current availability
				</h3>
				<div className="availability__wrapper">
					<div>
						Full Time
					</div>
					<div>
						Part Time
					</div>
				</div>
			</div>
		</section>
  )
}

export default Work
