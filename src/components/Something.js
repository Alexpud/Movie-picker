import React, {Component} from 'react';
import { ActivityIndicator, Text, View} from 'react-native';
import {applyMiddleware} from 'redux';
import { connect } from 'react-redux';
import {Spinner} from './common';
import AppBar from './AppBar';
import SearchBar from './SearchBar';
import Movie from './Movie';
import Icon from 'react-native-vector-icons/EvilIcons';

class Something extends Component{

  checkState(){
    if(this.props.response.loading){
      return <ActivityIndicator
        style={{height: 80}}
        size="large"
      />;
    }
    else if(this.props.response.movie)
      return <Movie movie = {this.props.response.movie}/>;
  }

  render(){
    return(
      <View style = {{flexDirection: 'column'}}>
        <AppBar/>
        {this.checkState()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle:{
    flex: 1,
    justifyContent:'center'
  }
};

const mapStateToProps = state =>{
  return {response: state.movieInfo};
};

export default connect(mapStateToProps)(Something);
