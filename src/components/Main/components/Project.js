import React from "react"

class Project extends React.Component {

	// state = {
	// 	isMouseInside: false
	// }
	
	// mouseEnter = () => {
	// 	this.setState({ isMouseInside: true })
	// }

	// mouseLeave = () => {
	// 	this.setState({ isMouseInside: false })
	// }

	render(){
		return (
			<article className="article">
					<img className="article__img" src={this.props.img}/>
					
					<h3 className="article__title">
						{this.props.title}
					</h3>
					<div className="article__wrapper--on-hover">
						<p className="article__desc">
							{this.props.desc}
						</p>
						<a className="article__link link link--project" href={this.props.website}>
							Visit Website
							<i className="icon fa fa-angle-right"></i>
						</a>
					</div>
			</article>

		)
	}
}

export default Project