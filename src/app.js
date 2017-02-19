import React from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import Something from './components/Something';

const App = () =>{
  return(
    <View>
      <Header headerText="Movie picker"/>
      <Something/>
    </View>
  );
};

export default App;
