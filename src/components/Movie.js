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
      return <MovieDetails movieDetails = {this.props.movie} style = {{flex: 3, backgroundColor: '#444444'}}/>;
    }
  }

  render(){

    const {
      cardStyle,
      movieTitle,
      moviePlotStyle,
      titleAndPlotSectionStyle
    } = styles;
    const {movie} = this.props;

    return(
      <View style = {cardStyle}>
        <Card style = {cardStyle}>
          <AppBar changeScene= {true} style = {{margin: 0, padding: 0, paddingBottom: 40}}/>
            <CardSection style ={{margin: 0, padding: 0,flex: 2, backgroundColor: '#444444'}}>
              <View style = {{flex: 4}}>
                <CardSection style = {titleAndPlotSectionStyle}>

                  <CardSection style={{marginTop: 0, backgroundColor: '#444444'}}>
                    <Text style = {movieTitle}> {movie.Title} ({movie.Year}) </Text>
                  </CardSection>

                  <CardSection style = {{ backgroundColor: '#444444'}}>
                    <Text style = {{textAlign: 'center',flex: 1, color: 'white'}}> {movie.Genre} </Text>
                  </CardSection>

                  <CardSection style = {{ backgroundColor: '#444444', paddingTop: 15}}>
                    <Text style = {moviePlotStyle}> {movie.Plot} </Text>
                  </CardSection>

                  <View style = {{backgroundColor: '#444444', flex: 1}}></View>
                </CardSection>
              </View>
            <MovieDetails movieDetails = {this.props.movie} style = {{flex: 3, backgroundColor: '#444444'}}/>
          </CardSection>
        </Card>
      </View>
    );
  }
};

const styles = {
  titleAndPlotSectionStyle:{
    flex: 1,
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  cardStyle:{
    flex: 3,
    backgroundColor: '#444444',
    flexDirection: 'column',
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    padding: 0
  },
  movieTitle:{
    color: 'white',
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
