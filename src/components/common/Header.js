import React from 'react';
import {View, Text} from 'react-native';

const Header = ({headerText}) =>{
  const { headerStyle, headerTextStyle } = styles;
  return(
    <View style = {headerStyle}>
      <Text style = {headerTextStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  headerStyle:{
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    height: 48,
    justifyContent: 'center',
    shadowColor: '#F8F8F8',
    shadowOpacity: 0.2,
  },
  headerTextStyle:{
    fontSize: 18
  }
};

export {Header};
