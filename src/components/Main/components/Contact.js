import React from "react"
import Zoom from 'react-reveal/Zoom'

function Work(props) {
  return (
	  <div className="contact-container">
		<section className="main__section container" id="contact">
		<Zoom>
			<h3>
				Get in touch
			</h3>
			<p className="text">
				Message me! Let's turn ideas into reality, and build great products!
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
			</Zoom>
		</section>
	</div>
  )
}

export default Work
