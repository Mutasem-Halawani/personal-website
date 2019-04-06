import React from "react"
import Project from './Project'

class Work extends React.Component {
	
	mouseEnter = () => {
		this.setState({ isMouseInside: true });
	}

	mouseLeave = () => {
		this.setState({ isMouseInside: false });
	}

	render(){
		return (
				<section className="main__section container" id="work">
					<h2>
						Production:
					</h2>
					<div className="main__row row">
						<Project
							title="Bridge to europe"
							desc="a website for bridge to europe"
							website="https://europe.nli.org.il/"
							img="https://images.unsplash.com/photo-1531412501799-1b4c354ca957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">
						</Project>
						<Project
							title="Web archive"
							desc="a website for a conference"
							website="http://webarchiving2018.nli.org.il/"
							img="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
						</Project>
						<Project
							title="Membership subscription"
							desc="A landing page for Membership subscription"
							website="https://members.nli.org.il"
							img="https://images.unsplash.com/photo-1471439330580-1493ebc92c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
						</Project>
					{/* </div>
					<div className="main__row row"> */}
						<Project
							title="20 years of web"
							desc="An interactive platform and exhibition of 20 years of web"
							website="http://20yearswebisrael.nli.org.il"
							img="https://images.unsplash.com/photo-1516975426901-140825b3cf8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
						</Project>
						<Project 
							title="Murad Tours"
							website="http://www.muradtours.com/"
							img="https://images.unsplash.com/photo-1497290788934-80266e135a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
							desc="A tourism website built with Wordpress">
						</Project>
						<Project 
							title="See more on Github"
							website="https://github.com/Mutasem-Halawani"
							img="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
							desc="">
						</Project>
					</div>
				 	<div className="separator">
					</div>
					<h2>
						Just for the fun of it:
					</h2>
					<div className="main__row row">
						<Project 
							title="Contacts Manager"
							website="https://contacts-manager-1edd4.firebaseapp.com"
							img="https://images.unsplash.com/photo-1535966516242-f835d6de428a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
							desc="A app to manage your contacts">
						</Project>
						<Project 
							title="Calculator"
							website="https://mutasem-halawani.github.io/Javascript-Calculator/"
							img="https://images.unsplash.com/photo-1510130263014-781e14ea0958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
							desc="Javascript Calculator">
						</Project>

						<Project 
							title="Twich API"
							website="https://mutasem-halawani.github.io/twitch-tv/"
							img="https://images.unsplash.com/photo-1547482926-5dbb3eb7300f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
							desc="Twitch selected channels online/offline">
						</Project>
						<Project 
							website="https://mutasem-halawani.github.io/WikipediaViewer/"
							img="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
							title="Wikipedia">
						</Project>

						<Project 
							website="https://mutasem-halawani.github.io/Solar-System/"
							img="https://images.unsplash.com/photo-1503365053-19ea7a512386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
							title="Solar System">
						</Project>

						<Project 
							website="https://mutasem-halawani.github.io/RandomQuoteMachine/"
							img="https://images.unsplash.com/photo-1522120691812-dcdfb625f397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
							title="Random Quote Machine">
						</Project>
						<Project 
							website="https://image-search-abs-layer-fcc.herokuapp.com/"
							img="https://images.unsplash.com/photo-1501681506726-610246d81ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
							title="Image Search-Abstraction-Layer API">
						</Project>

						<Project 
							website="https://file-metadata-microservice-fc.herokuapp.com/"
							img="https://images.unsplash.com/photo-1544523830-2bef1d330b7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
							title="File Metadata Microservice API">
						</Project>

						<Project 
							website="https://header-parser-ffc.herokuapp.com/"
							img="https://images.unsplash.com/photo-1485001564903-56e6a54d46ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
							title="Request Header Parser Microservice API">
						</Project>
					</div>
				</section>
		)
	}
}

export default Work