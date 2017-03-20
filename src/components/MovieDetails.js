import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {CardSection} from './common';
import Icon from 'react-native-vector-icons/FontAwesome';

class MovieDetails extends Component{

  render(){
    const {movieDetails} = this.props;
    const { cardSectionStyle,
      movieRateStyle,
      movieRatingSectionStyle,
      posterStyle,
      sectionStyle
    } = styles;

    return(
      <View style = {[this.props.style, sectionStyle]}>
        <CardSection style = {cardSectionStyle}>
            <Image
              source={{uri: movieDetails.Poster }}
              style = {posterStyle}
            />
          <View style = {movieRatingSectionStyle}>
            <Icon name="star" size = {40} color = "white" backgroundColor="#3b5998" />
            <View>
              <Text style = {movieRateStyle}>{movieDetails.imdbRating}/10 </Text>
              <Text>{movieDetails.imdbVotes}</Text>
            </View>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  cardSectionStyle:{
    backgroundColor: '#444444',
    flex: 1,
    flexDirection: 'column',
    margin: 0
  },
  sectionStyle:{
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  posterStyle:{
    width: 150,
    height: 250
  },
  movieRatingSectionStyle:{
    flexDirection: 'column'
  },
  movieRateStyle:{
    fontSize:   16,
    color: 'white'
  },
  movieRateNumbersStyle:{
    color: 'white',
    fontSize: 20
  }
};

export default MovieDetails;
