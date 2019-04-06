import React from "react"
  
function About(props) {
  return (
	<div className="about-wrapper">
		<section className="main__section container" id="about">
					<h2>
						Technologies I use:
					</h2>
					<div>
						<div className="main__section__wrapper">
							<h3>
								Full Stack Development
							</h3>
							<div>
								HTML5 - CSS3 - BEM - Sass - JQuery - Bootstrap - GraphQL - Apollo
								<br/>
								Node.js - Express.js
							</div>
						</div>
						<div className="main__section__wrapper">
							<h3>
								Frameworks
							</h3>
							<div>
								Angular - React
							</div>
						</div>
						<div className="main__section__wrapper">
							<h3>
								Database
							</h3>
							<div>
								MongoDB - Mysql - Postgresql
							</div>
						</div>
						<div className="main__section__wrapper">
							<h3>
								CMS
							</h3>
							<div>
								Wordpress - Blogger 
							</div>
						</div>
						<div className="main__section__wrapper">
							<h3>
								Languages
							</h3>
							<div>
								JavaScript - Typescript - Php
							</div>
						</div>
						<div className="main__section__wrapper">
							<h3>
								I can also help with
							</h3>
							<div>
								SEO - Google search console - Google analytics - Google tag manager - Shoppify - Webflow
							</div>
						</div>
					</div>
		</section>
	</div>
  )
}

export default About