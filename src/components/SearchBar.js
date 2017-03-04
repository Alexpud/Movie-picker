import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from './common';
import { connect } from 'react-redux';
import  {fetchMovie, hideSearchBar} from '../actions';

class SearchBar extends Component{
  state = {movieTitle: '', movieInfo: {}};

  onBackButtonPress(){
     this.props.hideSearchBar();
  }

  onButtonPress(movieTitle){
    this.setState({movieTitle});
    var temp_movieTitle = this.treatMovieName(movieTitle);
    this.props.fetchMovie(temp_movieTitle);
  }

  treatMovieName(movieName){
    if(movieName.length == 1)
      return movieName;
    return movieName.replace(' ','+');
  }

  render(){
    return(
      <View style={styles.searchFieldStyle}>
        <Button
          button = {{name: 'chevron-left', size: 60}}
          onPress = {this.onBackButtonPress.bind(this)}
        />
        <Input
          placeholder = "Name of the movie"
          onChangeText = {(movieTitle) => this.onButtonPress(movieTitle)}
          style = {styles.inputFieldStyle}
        />
      </View>
    );
  }
}

const styles = {
  searchFieldStyle:{
    height: 48,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
};

const mapStateToProps = state =>{
  console.log(state);
  return {movie: state.movieInfo};
};

export default connect(mapStateToProps,{fetchMovie, hideSearchBar})(SearchBar);
