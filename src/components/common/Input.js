import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = (props) =>{
  const {value, style, placeholder, onChangeText, secureTextEntry} = props;
  const { label, inputStyle, labelStyle, containerStyle} = styles;

  return(
    <View style = {containerStyle}>
      <TextInput
        value = {value}
        secureTextEntry={secureTextEntry}
        placeholder = {placeholder}
        placeholderTextColor = "#747474"
        autoCorrect = {false}
        onChangeText = { onChangeText }
        underlineColorAndroid = 'transparent'
        style = {[inputStyle, style]}
      />
    </View>
  );
}

const styles = {
  inputStyle:{
    color: "white",
    alignSelf: 'stretch',
    fontSize: 20,
    flex: 1,
    textAlign: 'center'
  },
  containerStyle:{
    flex: 4,
    height: 64
  }
};

export {Input};
