import React, { Component } from 'react'

class Fave extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}

	}
	handleClick = (e) => {
		e.stopPropagation()
		console.log('Handling Fave click!')

		// Add this line. You'll call the function passed through props
		this.props.onFaveToggle()

	}
	render() {
		const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
		return (
			<div className={`film-row-fave ${isFave}`} onClick={this.handleClick}>
				<p className="material-icons">{isFave}</p>
			</div>
		)
	}
}
export default Fave