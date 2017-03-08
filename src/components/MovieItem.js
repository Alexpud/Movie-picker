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
    Actions.Movie({movieTitle: this.props.movie.Title});
  }

  render(){
    const {
      cardStyle,
      movieTitle,
      moviePlotStyle,
      posterStyle
    } = styles;
    const {movie} = this.props;

    return(
        <Card style = {cardStyle}>
          <TouchableWithoutFeedback onPress = {this.onRowPress.bind(this)}>
            <Image
              source={{uri: movie.Poster }}
              style = {posterStyle}
            />
          </TouchableWithoutFeedback>
          <CardSection style = {{backgroundColor: '#FFFFFF', flex: 6}}>
            <Text style = {movieTitle}> {movie.Title} ({movie.Year}) </Text>
          </CardSection>
        </Card>

    );
  }
};

const styles = {
  cardStyle:{
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20
  },
  movieTitle:{
    flex: 1,
    color: 'black',
    textAlign: 'left',
    fontSize: 20
  },
  moviePlotStyle:{
    color: 'white',
    fontSize: 16
  },
  posterStyle:{
    alignSelf: 'center',
    width: 100,
    height: 80
  }
};

export default MovieItem;
