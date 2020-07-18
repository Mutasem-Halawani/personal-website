import React from "react"
import Project from './Project'

class Work extends React.Component {

	render(){
		return (
				<section className="main__section container" id="work">
					<h2>
						Portfolio:
					</h2>
					<div className="main__row row">
						<Project
							title="Bridge to europe"
							desc="Bridge to europe website - NLI"
							website="https://europe.nli.org.il/"
							img="https://images.unsplash.com/photo-1531412501799-1b4c354ca957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">
						</Project>
						<Project
							title="Web archive"
							desc="Conference website - NLI"
							website="http://webarchiving2018.nli.org.il/"
							img="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
						</Project>
						<Project
							title="National library of Israel - Membership subscription"
							desc="A landing page for Membership subscription"
							website="https://members.nli.org.il"
							img="https://images.unsplash.com/photo-1471439330580-1493ebc92c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
						</Project>
						<Project
							title="A Web Archive representing 20 years of famous websites"
							desc="An interactive platform and exhibition of 20 years of web"
							website="http://20yearswebisrael.nli.org.il"
							img="https://images.unsplash.com/photo-1516975426901-140825b3cf8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
						</Project>
						<Project
							title="Murad Tours"
							desc="A tourism website built using Wordpress"
							website="http://www.muradtours.com/"
							img="https://images.unsplash.com/photo-1497290788934-80266e135a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
						</Project>
						<Project
							title="See more on Github"
							website="https://github.com/Mutasem-Halawani"
							img="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
							desc="">
						</Project>
					</div>
				</section>
		)
	}
}

export default Work
