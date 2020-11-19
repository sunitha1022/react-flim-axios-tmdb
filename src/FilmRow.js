import React, { Component } from 'react'
import Fave from './Fave'
import FilmPoster from './FilmPoster'

class FilmRow extends Component {

	render() {

		const title = this.props.film.title
		const year = new Date(this.props.film.release_date).getFullYear()
		return (
			<div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
				<FilmPoster film={this.props.film} />
				<div className="film-summary">
					<h1>{title}</h1>
					<p>{year}</p>
				</div>
				<Fave onFaveToggle={this.props.onFaveToggle}
					isFave={this.props.isFave} />
			</div>
		)
	}
}

export default FilmRow


