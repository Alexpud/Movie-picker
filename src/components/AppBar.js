import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import {CardSection, Button} from './common';
import {showSearchBar, hideSearchBar} from '../actions';
import SearchBar from './SearchBar';

class AppBar extends Component{

  onPress(){
    if(this.props.searchbar){
      this.props.hideSearchBar();
    }
    else {
      this.props.showSearchBar();
    }
  }

  topBars(){
    if(this.props.searchbar){
      return <SearchBar/>;
    }
    return (
      <Text style = {styles.appNameStyle}> Movie picker </Text>
    );
  }

  render(){
    return(
      <CardSection style = {{backgroundColor:'#6d9cec'}}>
        <View style = {{flex: 6, height: 48}}>
          {this.topBars()}
        </View>
        <Button button = {{name: 'search', size: 48}} style = {styles.buttonStyle} onPress= {this.onPress.bind(this)} style = {{marginTop: 5}}/>
      </CardSection>
    );
  }
}

const styles = {
  buttonStyle:{
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  appNameStyle:{
    color: "white",
    marginTop: 5,
    fontSize: 24,
    textAlign: 'center'
  }
}

const mapStateToProps = state =>{
  const {searchbar} = state.appBar;
  return {searchbar};
};

export default connect(mapStateToProps,{showSearchBar, hideSearchBar})(AppBar);
