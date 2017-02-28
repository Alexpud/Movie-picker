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
        <CardSection>
          <Image
            source={{uri: movieDetails.Poster }}
            style = {posterStyle}
          />
          <View style = {movieRatingSectionStyle}>
            <Icon name="star" size = {40} color = "yellow" backgroundColor="#3b5998" />
            <View>
              <Text style = {movieRateStyle}>{movieDetails.imdbRating}/10 </Text>
              <Text style = {{paddingLeft: 15}}>{movieDetails.imdbVotes}</Text>
            </View>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {

  posterStyle:{
    width: 200,
    height: 250
  },
  movieRatingSectionStyle:{
    paddingLeft: 15,
    flex: 1,
    flexDirection: 'row'
  },
  movieRateStyle:{
    paddingLeft: 15,
    fontSize:   16,
    color: 'black'
  },
  movieRateNumbersStyle:{
    color: 'black',
    fontSize: 20
  }
};

export default MovieDetails;
