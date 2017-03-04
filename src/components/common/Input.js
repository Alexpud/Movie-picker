import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({value, placeholder, onChangeText, secureTextEntry }) =>{
  const { label, inputStyle, labelStyle, containerStyle} = styles;
  return(
    <View style = {containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder = {placeholder}
        autoCorrect = {false}
        onChangeText = { onChangeText }
        underlineColorAndroid = 'transparent'
        style = {inputStyle}
      />
    </View>
  );
}

const styles = {
  inputStyle:{
    backgroundColor: 'white',
    color: "#000",
    alignSelf: 'stretch',
    fontSize: 24,
    flex: 1,
    lineHeight: 18,
    textAlign: 'center'
  },
  containerStyle:{
    flex: 4,
    height: 64
  }
};

export {Input};
