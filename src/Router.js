import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Something from './components/Something';
import Movie from './components/Movie';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65}}>
      <Scene key = "main">
        <Scene key = "something" component = {Something} title = "Pick a movie" initial />
        <Scene
          key = "movie"
          component = {Movie}
          title= "Movie info"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
