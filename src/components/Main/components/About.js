import React from "react"
import Lines from "react-svg-textures/es/Paths"

const Texture = () => (
	<svg className="svg">
	  <Lines
		id='pattern'
		d='woven'
		stroke='gray'
		strokeWidth={1}
		orientation='vertical'
		size={20}
		shapeRendering='circle'
		background='black'
	  />
	  <circle cx='50%' cy='90%' r='100%' fill='url(#pattern)' />
	</svg>
  );
  
function About(props) {
  return (
	<div className="about-wrapper">
	<Texture>
    </Texture>
		<section className="main__section" id="about">
				<div>
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
				</div>
		</section>
	</div>
  )
}

export default About