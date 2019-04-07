import React from "react"

class Project extends React.Component {

	render(){
		return (
		<div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
			<article className="article" style={{backgroundImage: `url(${this.props.img})` }}>
					<h3 className="article__title">
						{this.props.title}
					</h3>
					<div className="article__wrapper--on-hover">
						<p className="article__desc">
							{this.props.desc}
						</p>
						<a target="_blank" className="article__link link link--project" href={this.props.website}>
							Visit Website
							<span className="arrow">
								<i className="icon fa fa-angle-right"></i>
							</span>
						</a>
					</div>
			</article>
		</div>

		)
	}
}

export default Project