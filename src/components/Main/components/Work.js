import React from "react"
import Project from './Project'

const projects = [
	{
		title: 'Bridge to europe',
		desc: 'a website for bridge to europe',
		website: 'https://europe.nli.org.il/',
		img: '../about.jpg',
	},
	{
		title:"Web archive",
		desc:"a website for a conference",
		website:"http://webarchiving2018.nli.org.il/",
		img:"../bg-blue-msdos.png",
	},
	{
		title:"Membership subscription",
		desc:"A landing page for Membership subscription",
		website:"https://members.nli.org.il",
		img:"../members.png",
	},
	{
		title:"20 years of web",
		desc:"An interactive platform and exhibition of 20 years of web",
		website:"http://20yearswebisrael.nli.org.il",
		img:"../exhibition.png",

	},
	{
		title:"Murad Tours",
		website:"http://www.muradtours.com/",
		img:"../murad.jpg",
		desc:"A tourism website built with Wordpress",
	},
	{
		title:"See more on Github",
		website:"https://github.com/Mutasem-Halawani",
		img:"",
		desc:"",
	},
	
]

const sideProjects = [
	{
		title:"Contacts Manager",
		website:"https://contacts-manager-1edd4.firebaseapp.com",
		img:"../contact.png",
		desc:"A app to manage your contacts",
	},
	{
		website:"https://mutasem-halawani.github.io/WikipediaViewer/",
		img:"../wikipedia.png",
		title:"Wikipedia",
	},
	{
		
	website:"https://mutasem-halawani.github.io/Solar-System/",
		img:"../planets.png",
		title:"Solar System",

	},
	{
		website:"https://mutasem-halawani.github.io/RandomQuoteMachine/",
		img:"../quote.jpg",
		title:"Random Quote Machine",
	},
	{
		website:"https://image-search-abs-layer-fcc.herokuapp.com/",
		img:"../flowers.jpeg",
		title:"Image Search-Abstraction-Layer API",
	},
	{
		website:"https://file-metadata-microservice-fc.herokuapp.com/",
		img:"../file.png",
		title:"File Metadata Microservice API",
	},
	{
		website:"https://header-parser-ffc.herokuapp.com/",
		img:"../parser.jpg",
		title:"Request Header Parser Microservice API",
	}
]



class Work extends React.Component {
	
	mouseEnter = () => {
		this.setState({ isMouseInside: true });
	}

	mouseLeave = () => {
		this.setState({ isMouseInside: false });
	}

	render(){
		return (
			// <section className="main__section" id="work">
			// 	<h2>
			// 		Production
			// 	</h2>
			// 	<div className="main__row">
			// 		{projects.map((project, i) => {
			// 			const rows = [
							
			// 			]
			// 			if (projects.indexOf(project) === 0) {
			// 				rows.push(
			// 					'<div className="main__row">'
			// 				)
			// 			}
			// 			rows.push(
			// 				<Project
			// 					key={i}
			// 					title={project.title}
			// 					desc={project.desc}
			// 					website={project.website}
			// 					img={project.img}>
			// 				</Project>
			// 			)
			// 			if ((projects.indexOf(project) % 3) === 2)  {
			// 				rows.push(
			// 					'</div><div className="main__row">'
			// 				)
			// 				console.log('third item')
			// 			}
			// 		return rows
			// 		})}
			// 		<br/>
			// 		<br/>
			// 		<br/>
			// 		<br/>
			// 		{sideProjects.map((project, i) => {
			// 		 return (
			// 			 <Project
			// 				key={i}
			// 				title={project.title}
			// 				desc={project.desc}
			// 				website={project.website}
			// 				img={project.img}>
			// 			</Project>
			// 		)
			// 		})}
			// 	</div>
			<section className="main__section" id="work">
				<div className="main__row">
					<Project
						title="Bridge to europe"
						desc="a website for bridge to europe"
						website="https://europe.nli.org.il/"
						img="../about.jpg">
					</Project>
					<Project
						title="Web archive"
						desc="a website for a conference"
						website="http://webarchiving2018.nli.org.il/"
						img="../bg-blue-msdos.png">
					</Project>
					<Project
						title="Membership subscription"
						desc="A landing page for Membership subscription"
						website="https://members.nli.org.il"
						img="../members.png">
					</Project>
				</div>
				<div className="main__row">
					<Project
						title="20 years of web"
						desc="An interactive platform and exhibition of 20 years of web"
						website="http://20yearswebisrael.nli.org.il"
						img="../exhibition.png">
					</Project>
					<Project 
						title="Murad Tours"
						website="http://www.muradtours.com/"
						img="../murad.jpg"
						desc="A tourism website built with Wordpress">
					</Project>
					<Project 
						title="See more on Github"
						website="https://github.com/Mutasem-Halawani"
						img=""
						desc="">
					</Project>
				</div>
				<br/>
				<br/>
				<br/>
				<br/>
				<h2>
					Just for the fun of it
				</h2>
				<div className="main__row">
					<Project 
						title="Contacts Manager"
						website="https://contacts-manager-1edd4.firebaseapp.com"
						img="../contact.png"
						desc="A app to manage your contacts">
					</Project>

					<Project 
						title="Calculator"
						website="https://mutasem-halawani.github.io/Javascript-Calculator/"
						img="../calculator.jpg"
						desc="Javascript Calculator">
					</Project>

					<Project 
						title="Twich API"
						website="https://mutasem-halawani.github.io/twitch-tv/"
						img="../twitch.png"
						desc="Twitch selected channels online/offline">
					</Project>
				</div>
				<div className="main__row">
					<Project 
						website="https://mutasem-halawani.github.io/WikipediaViewer/"
						img="../wikipedia.png"
						title="Wikipedia">
					</Project>

					<Project 
						website="https://mutasem-halawani.github.io/Solar-System/"
						img="../planets.png"
						title="Solar System">
					</Project>

					<Project 
						website="https://mutasem-halawani.github.io/RandomQuoteMachine/"
						img="../quote.jpg"
						title="Random Quote Machine">
					</Project>
				</div>
				<div className="main__row">
					<Project 
						website="https://image-search-abs-layer-fcc.herokuapp.com/"
						img="../flowers.jpeg"
						title="Image Search-Abstraction-Layer API">
					</Project>

					<Project 
						website="https://file-metadata-microservice-fc.herokuapp.com/"
						img="../file.png"
						title="File Metadata Microservice API">
					</Project>

					<Project 
						website="https://header-parser-ffc.herokuapp.com/"
						img="../parser.jpg"
						title="Request Header Parser Microservice API">
					</Project>
				</div>
				</section>
		)
	}
}

export default Work