import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {CardSection} from './common';
import Icon from 'react-native-vector-icons/FontAwesome';

class MovieDetails extends Component{

  render(){
    const {movieDetails} = this.props;
    const {movieRateStyle, movieRatingSectionStyle, posterStyle} = styles;

    return(
      <View>
        <CardSection style = {{backgroundColor: '#444444'}}>
          <Image
            source={{uri: movieDetails.Poster }}
            style = {posterStyle}
          />
          <View style = {movieRatingSectionStyle}>
            <Icon name="star" size = {40} color = "#d3d705" backgroundColor="#3b5998" />
            <View>
              <Text style = {movieRateStyle}>{movieDetails.imdbRating}/10 </Text>
              <Text style = {{ paddingLeft: 15}}>{movieDetails.imdbVotes}</Text>
            </View>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {

  posterStyle:{
    width: 100,
    height: 100
  },
  movieRatingSectionStyle:{
    paddingLeft: 15,
    flex: 1,
    flexDirection: 'row'
  },
  movieRateStyle:{
    paddingLeft: 15,
    fontSize:   16,
    color: 'white'
  },
  movieRateNumbersStyle:{
    color: 'white',
    fontSize: 20
  }
};

export default MovieDetails;
