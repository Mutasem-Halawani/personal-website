import React from "react"
// import Zoom from 'react-reveal/Zoom'
// import { navigate } from 'gatsby-link'


function encode(data) {
	return Object.keys(data)
	  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
	  .join("&");
}

class Work extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		fetch("/", {
		  method: "POST",
		  headers: { "Content-Type": "application/x-www-form-urlencoded" },
		  body: encode({
			"form-name": form.getAttribute("name"),
			...this.state
		  })
		})
		// .then(() => navigateTo(form.getAttribute("action")))
		.then(() => console.log('SUCCESS'))
		.catch(error => alert(error));
	}

	render() {
		const { name, email, message } = this.state;
		return (
			<div className="contact-container">
			  <section className="main__section container" id="contact">
			  {/* <Zoom> */}
				  <h3>
					  Get in touch
				  </h3>
				  <p className="text">
					  Message me! Let's turn ideas into reality, and build great products!
				  </p>
				  <form
					  name="contact"
					  method="post"
					  data-netlify="true"
					  className="form"
					  action="/"
					  onSubmit={this.handleSubmit}>
					   <input type="hidden" name="form-name" value="contact" />
					  <div className="form__input-wrapper">
						  <label htmlFor="name">
							  Name
						  </label>
						  <input id="name" value={name} type="text" name="name" placeholder="name"  onChange={this.handleChange}/>
						  <label htmlFor="email">
							  Email
						  </label>
						  <input id="email" value={email} type="email" name="email" placeholder="email"  onChange={this.handleChange}/>
					  </div>
					  <label htmlFor="message">
						  Message
					  </label>
					  <textarea id="message" value={message} placeholder="message" name="message" rows="4"  onChange={this.handleChange}>
					  </textarea>
					  <button type="submit" aria-label="send message" className="btn box-effect" onClick={this.handleSubmit}>
						  Send
					  </button>
				  </form>
				  {/* </Zoom> */}
			  </section>
		  </div>
		)
	}
}

export default Work
