import React from "react"
import Slide from 'react-reveal/Slide';

function About(props) {
  return (
	<div className="about-wrapper">
		<section className="main__section container" id="about">
			<div className="main__section__wrapper">
				<Slide bottom>
					<p className="p">	
						Hi! My name is Motasem Halawani. Born and raised in Jerusalem, I studied business administration and  worked in marketing - after which I discovered my passion for coding. For the past 3 years I’ve been experimenting with code and working professionally as developer. I am passionate about new technologies and give a great deal for performance and accessibility. I strive to build things that will have a large and positive effect on people’s life.
					</p>	
				</Slide>
				<Slide bottom>
				<p className="p">	
					More recently, I mainly have been working with Angular, Javascript, Typescript, though I have experience building great products with a number of technologies, including: HTML5 - CSS3 - BEM - Sass - JQuery - Bootstrap - GraphQL - Apollo - Node.js - Express.js. I’ve also built Wordpress websites using the CMS, PHP and mysql, in addition to shopify and webflow platforms. 
				</p>	
				</Slide>
				<Slide bottom>
				<p className="p">	
					Additionally I know a great deal about SEO and third party integrations. I’ve worked in online marketing and built advertisements for Facebook and Google.
				</p>	
				</Slide>
				<Slide bottom>
				<p className="p">	
					When I’m not immersed in code, I enjoy biking, reading, travelling and learning languages. I’m native Arabic speaker, also fluent in Hebrew and English.
				</p>	
				</Slide>
			</div>
		</section>
	</div>
  )
}

export default About