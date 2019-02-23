import React from "react"


class Project extends React.Component {

	state = {
		isMouseInside: false
	}
	
	mouseEnter = () => {
		this.setState({ isMouseInside: true });
	}

	mouseLeave = () => {
		this.setState({ isMouseInside: false });
	}

	render(){
		return (
			<article className="article" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
				{
					this.state.isMouseInside ? 
					<div>
						<p>
							{this.props.desc}
						</p>
						<a href={this.props.website}>
							Visit Website
						</a>
					</div>
					: 
					<div>
						<h3 className="article__title">
							{this.props.title}
						</h3>
						<img className="main__img" src={this.props.img}/>
					</div>
				}
		</article>
		)
	}
}

export default Project