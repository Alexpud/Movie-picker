import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Button = ({onPress, children, style, button}) =>{
  const {buttonStyle, textStyle} = styles;
  const {name, size} = button;
  return(
    <TouchableOpacity onPress = {onPress} style = {[buttonStyle, style]} >
      <Icon name = {name} size = {size} color = "white" />
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
