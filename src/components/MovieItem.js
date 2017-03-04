import React, {Component} from 'react';
import { Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import MovieDetails from './MovieDetails';
import {Card, CardSection} from './common';

class MovieItem extends Component{
  renderMovieDetails(){
    if( this.props.movie){
      return <MovieDetails movieDetails = {this.props.movie}/>;
    }
  }

  onRowPress(){
    Actions.movie({movieTitle: this.props.movie.Title});
  }

  render(){
    const {movieTitle,moviePlotStyle, posterStyle} = styles;
    const {movie} = this.props;

    return(

        <Card style = {{ backgroundColor: '#22221a'}}>
          <CardSection style = {{backgroundColor: '#6d9cec'}}>
            <Text style = {movieTitle}> {movie.Title} ({movie.Year}) </Text>
          </CardSection>
          <TouchableWithoutFeedback onPress = {this.onRowPress.bind(this)}>
            <Image
              source={{uri: movie.Poster }}
              style = {posterStyle}
            />
          </TouchableWithoutFeedback>
        </Card>

    );
  }
};

const styles = {
  movieTitle:{
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 24
  },
  moviePlotStyle:{
    color: 'white',
    fontSize: 16
  },
  posterStyle:{
    alignSelf: 'center',
    width: 200,
    height: 250
  }
};

export default MovieItem;
