import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Input, Button} from './common';
import axios from 'axios';

class SearchBar extends Component{
  state = {movieTitle: '', movieInfo: {}};

  checkError(response){
    if(response.data.Error != null)
      return true;
    return false;
  }

  onButtonPress(){
    movieTitle = this.treatMovieName(this.state.movieTitle);

    axios.get('http://www.omdbapi.com/?t'+movieTitle+'&y=&plot=short&r=json')
      .then(response => {
        if(!this.checkError(response))
          this.setState({ movieInfo: response });
        else{
          this.setState({error: 'Something went wrong'});
        }
      })
      .catch(error =>{
        this.setState({error: error});
      });
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
    height: 48,
    paddingTop: 10
  }
};

export {SearchBar};
