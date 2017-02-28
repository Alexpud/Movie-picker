import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {applyMiddleware} from 'redux';
import { connect } from 'react-redux';
import {Spinner} from './common';
import SearchBar from './SearchBar';
import Movie from './Movie';

class Something extends Component{

  checkState(){
    console.log(this.props.response);
    if(this.props.response.loading){
      return <Spinner size = "large"/>;
    }
    else if(this.props.response.movie)
      return <Movie movie = {this.props.response.movie}/>;
  }

  render(){
    return(
      <View>
        <SearchBar/>
        {this.checkState()}
      </View>
    );
  }
}

const styles = {
};

const mapStateToProps = state =>{
  return {response: state.movieInfo};
};

export default connect(mapStateToProps)(Something);
