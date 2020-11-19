import FilmRow from './FilmRow'
import React, { Component } from 'react'

class FilmListing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filter: 'all'
		}
	}
	handleFilterClick = (filter) => {
		console.log("Setting filter to " + filter)
		this.setState({
			filter: filter
		})
	}
	render() {
		let showFilms = this.props.films
		if (this.state.filter === "faves") {
			showFilms = this.props.faves
		} else {
			showFilms = this.props.films
		}
		const allFilms = showFilms.map((film) => {
			return (
				<FilmRow
					film={film}
					key={film.id}
					handleDetailsClick={() => this.props.handleDetailsClick(film)}
					onFaveToggle={() => this.props.onFaveToggle(film)}
					isFave={this.props.faves.includes(film)}
				/>
			)
		})
		return (
			<div className="film-list">
				<h1 className="section-title">FILMS</h1>
				<div className="film-list-filters">
					<div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
						ALL
            <span className="section-count">{this.props.films.length}</span>
					</div>
					<div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
						FAVES
        <span className="section-count">{this.props.faves.length}</span>
					</div>
				</div>

				{allFilms}
			</div>
		)
	}
}
export default FilmListing
