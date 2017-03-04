import React, {Component} from 'react';
import { ActivityIndicator, Text, View} from 'react-native';
import {applyMiddleware} from 'redux';
import { connect } from 'react-redux';
import {Spinner} from './common';
import AppBar from './AppBar';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Icon from 'react-native-vector-icons/EvilIcons';

class Something extends Component{

  checkState(){
    if(this.props.response.loading){
      return <ActivityIndicator
        style={{height: 80}}
        size="large"
      />;
    }else{
      return <MovieList />;
    }

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
  console.log(state);
  return {response: state.movies};
};

export default connect(mapStateToProps)(Something);
