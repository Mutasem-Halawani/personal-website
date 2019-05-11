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
			<form
				netlify
				name="contact"
				method="POST"
				data-netlify="true"
				action="/"
				className="form">
				<div className="form__input-wrapper">
					<label htmlFor="name">
						Name
					</label>
					<input id="name" type="text" name="name" placeholder="name"/>
					<label htmlFor="email">
						Email
					</label>
					<input id="email" type="email" name="email" placeholder="email"/>
				</div>
				<label htmlFor="message">
					Message
				</label>
				<textarea id="message" placeholder="message" name="message" rows="4">
				</textarea>
				<button type="submit" aria-label="send message" className="btn box-effect">
					Send
				</button>
			</form>
			</Zoom>
		</section>
	</div>
  )
}

export default Work
