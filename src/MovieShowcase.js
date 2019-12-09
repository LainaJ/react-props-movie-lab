import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movieItem, index) =>  
    <MovieCard
     key = {index}
     title = {movieItem.title}
     IMDBRating = {movieItem.IMDBRating}
     genres = {movieItem.genres}
     poster = {movieItem.poster}
     />
     )
  }//end generate 

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
