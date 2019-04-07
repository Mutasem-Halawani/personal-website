import React from "react"
import Zoom from 'react-reveal/Zoom'

class Project extends React.Component {

	render(){
		return (
			<Zoom>
				<div className="article__container col-sm-12 col-md-6 col-lg-4 col-xl-4">
					<img src={this.props.img} alt={this.props.title} className="article__img"/>
					<article className="article">
						<h3 className="article__title">
							{this.props.title}
						</h3>
						<div className="article__wrapper--on-hover">
							<p className="article__desc">
								{this.props.desc}
							</p>
							<a
								target="_blank" 
								rel="noopener noreferrer"
								className="article__link link link--project" 
								href={this.props.website}>
									Visit Website
								<span className="arrow">
									<i className="icon fa fa-angle-right"></i>
								</span>
							</a>
						</div>
					</article>
				</div>
			</Zoom>
		)
	}
}

export default Project