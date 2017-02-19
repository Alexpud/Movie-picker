import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) =>{
  const {buttonStyle, textStyle} = styles;
  return(
    <TouchableOpacity onPress = {onPress} style = {buttonStyle} >
      <Image source = {require('../../image/magnifying-glass-search-64x64.png')} />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle:{
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  },
  textStyle:{
    alignSelf: 'center',
    fontColor: 'black',
    fontSize: 16,
    paddingBottom: 10,
    paddingTop: 10
  }
};

export { Button };
