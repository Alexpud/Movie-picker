import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import MovieDetails from './MovieDetails';
import {Card, CardSection} from './common';

class Movie extends Component{
  renderMovieDetails(){
    if( this.props.movie){
      return <MovieDetails movieDetails = {this.props.movie}/>;
    }
  }
  render(){
    const {movieTitle,moviePlotStyle} = styles;
    return(
      <Card>
        <CardSection>
          <Text style = {movieTitle}> {this.props.movie.Title} </Text>
        </CardSection>

        <CardSection>
          <Text style = {{textAlign: 'center',flex: 1}}> {this.props.movie.Genre} </Text>
        </CardSection>

        <CardSection>
          <Text style = {moviePlotStyle}> {this.props.movie.Plot} </Text>
        </CardSection>

        {this.renderMovieDetails()}
     </Card>
    );
  }
};

const styles = {
  movieTitle:{
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontSize: 24
  },
  moviePlotStyle:{
    color: 'black',
    fontSize: 16
  }
}

export default Movie;
