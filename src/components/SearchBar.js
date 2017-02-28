import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Input, Button} from './common';
import { connect } from 'react-redux';
import  {fetchMovie} from '../actions';

class SearchBar extends Component{
  state = {movieTitle: '', movieInfo: {}};

  onButtonPress(){
    movieTitle = this.treatMovieName(this.state.movieTitle);
    this.props.fetchMovie(movieTitle);
    console.log(this.props);
  }

  render(){
    return(
      <View style={styles.searchFieldStyle}>
        <Input
          placeholder = "Name of the movie"
          onChangeText = {movieTitle => this.setState({movieTitle})}
          style = {styles.inputFieldStyle}
        />
        <Button
          style = {styles.buttonStyle}
          onPress={this.onButtonPress.bind(this)}
        />
      </View>
    );
  }

  treatMovieName(movieName){
    return movieName.replace(' ','+');
  }

}

const styles = {
  searchFieldStyle:{
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
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

export default connect(mapStateToProps,{fetchMovie})(SearchBar);
