import React from "react"
import Slide from 'react-reveal/Slide';
import moment from 'moment'

function About(props) {
  const workingYears = moment().format('YYYY') - 2015
  return (
	<div className="about-wrapper">
		<section className="main__section container" id="about">
			<div className="main__section__wrapper">
				<Slide bottom>
					<p className="p">
						Hi! My name is Motasem Halawani. I'm a professional software engineer with {workingYears} years of experience.
            I Born and raised in Jerusalem, currently residing the Washington DC, USA.
            I strive to build things that will have a large and positive effect on people’s life.
					</p>
				</Slide>
				<Slide bottom>
				<p className="p">
					When I’m not immersed in code, I enjoy riding, reading, travelling and learning languages.
          I’m native Arabic speaker, also fluent in Hebrew and English.
				</p>
				</Slide>
			</div>
		</section>
	</div>
  )
}

export default About
