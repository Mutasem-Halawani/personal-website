import React from "react"
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact/Contact'

function Main(props) {
  return (
		<div className="main-wrapper">
		
			<main className="main">
				<About>
				</About>
				<Work>
				</Work>
				<Contact>
				</Contact>
			</main>
		</div>
  )
}

export default Main