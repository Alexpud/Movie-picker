import React from 'react';
import {View} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Something from './components/Something';
import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';
import Movie from './components/Movie';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key = "main">
        <Scene key = "Something"
          component = {Something}
          title = "Pick a movie"
          initial = {true}
          hideNavBar = {true}
        />
        <Scene
          key = "Movie"
          component = {Movie}
          title= "Movie info"
          hideNavBar ={true}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
