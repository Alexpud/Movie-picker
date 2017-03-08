import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {Input, Button} from './common';
import { connect } from 'react-redux';
import  {
  fetchMovie,
  fetchMovies,
  hideSearchBar,
  typeSearchBar
} from '../actions';

class SearchBar extends Component{
  state = {movieTitle: '', movieInfo: {}};

  onBackButtonPress(){
    Actions.Something();
    //this.props.hideSearchBar();
  }

  onButtonPress(movieTitle){
    this.setState({movieTitle});
    var temp_movieTitle = this.treatMovieName(movieTitle);
    this.props.fetchMovies(temp_movieTitle);
  }

  treatMovieName(movieName){
    if(movieName.length == 1)
      return movieName;

    return movieName.replace(' ','+');
  }

  onChangeText(movieTitle){
    this.props.typeSearchBar(movieTitle);
    if(this.props.changeScene)
      Actions.Something();
    else{
      this.onButtonPress(movieTitle)
    }
  }

  render(){
    const {appBar} = this.props;
    return(
      <View style={styles.searchFieldStyle}>
        <Button
          disabled
          button = {{name: 'chevron-left', size: 60}}
          onPress = {this.onBackButtonPress.bind(this)}
        />
        <Input
          value = {appBar.searchValue}
          placeholder = "Name of the movie"
          onChangeText = {(movieTitle) => this.onChangeText(movieTitle)}
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
  return {movie: state.movieInfo, appBar: state.appBar};
};

export default connect(mapStateToProps,{
  fetchMovie,
  fetchMovies,
  hideSearchBar,
  typeSearchBar
})(SearchBar);
