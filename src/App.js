import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';
import axios from 'axios'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			films: TMDB.films,
			faves: [],
			current: {}
		}
	}
	handleFaveToggle = (film) => {
		const faves = this.state.faves.slice();
		const filmIndex = faves.indexOf(film);

		//If the film is already in their favorites, take it out of the faves array.
		if (filmIndex >= 0) {
			console.log(`Removing ${film.title} from faves`);
			faves.splice(filmIndex, 1);
		}
		//If the film is not in their favorites, add it to the faves array.
		if (filmIndex === -1) {
			console.log(`Adding ${film.title} to faves`);
			faves.push(film);
		}
		this.setState({
			faves: faves
		})
	}
	handleDetailsClick = (film) => {

		let flimid = film.id;
		console.log('URL IS ', process.env.REACT_APP_BASE_URL)
		const apiKey = process.env.REACT_APP_API_KEY //getting the API_KEY stored in the .env file
		console.log(process.env.REACT_APP_API_KEY);
		const url = `https://api.themoviedb.org/3/movie/${flimid}?api_key=${apiKey}`
		let filmdet = '';
		let response = axios.get(url,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((response) => {
				console.log('the response i got===>', response);
				console.log(response.data.adult);
				console.log(response.data.budget);
				filmdet.poster_path = response.data.poster_path;
				filmdet.backdrop_path = response.data.backdrop_path;

			})
			.catch((error) => {
				console.log('API ERROR:===>', error);
			});
		console.log(response);
		console.log("Fetching details for " + film.title)
		this.setState({
			current: film
		})
	}
	render() {
		return (
			<div className="film-library">
				<FilmListing films={this.state.films}
					onFaveToggle={this.handleFaveToggle}
					faves={this.state.faves}
					handleDetailsClick={this.handleDetailsClick}
					flim={this.state.current} />
				<FilmDetails film={this.state.current} />
			</div>
		);
	}
}

export default App;
