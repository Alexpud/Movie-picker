import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import MovieDetails from './MovieDetails';
import AppBar from './AppBar';
import {Card, CardSection} from './common';
import {fetchMovie} from '../actions';

class Movie extends Component{

  componentWillMount(){
    this.props.fetchMovie(this.props.movieTitle);
  }

  renderMovie(){
    if(this.props.movie){
      return (<Text> Worked </Text>);
    }

    return (<Text> Nothing </Text>);
  }

  renderMovieDetails(){
    if( this.props.movie){
      return <MovieDetails movieDetails = {this.props.movie}/>;
    }
  }

  render(){
    const {cardStyle,movieTitle,moviePlotStyle} = styles;
    const {movie} = this.props;
    return(
      <Card style = {cardStyle}>
        <AppBar changeScene= {true} style = {{marginTop: 0}}/>
        
        <CardSection style={{marginTop: 0}}>
          <Text style = {movieTitle}> {movie.Title} ({movie.Year}) </Text>
        </CardSection>

        <CardSection style = {{ backgroundColor: '#444444'}}>
          <Text style = {{textAlign: 'center',flex: 1, color: 'white'}}> {movie.Genre} </Text>
        </CardSection>

        <CardSection style = {{ backgroundColor: '#444444'}}>
          <Text style = {moviePlotStyle}> {movie.Plot} </Text>
        </CardSection>

       {this.renderMovieDetails()}
      </Card>
    );
  }
};

const styles = {
  cardStyle:{
    backgroundColor:'#444444',
    borderWidth:0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0
  },
  movieTitle:{
    color: 'black',
    textAlign: 'center',
    fontSize: 24
  },
  moviePlotStyle:{
    color: 'white',
    fontSize: 16
  }
};

const mapStateToProps = state =>{
  console.log(state);
  const movie = state.movies.movie;
  console.log(movie);
  return {movie};
}

export default connect(mapStateToProps,{fetchMovie})(Movie);
