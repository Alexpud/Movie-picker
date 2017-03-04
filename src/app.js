import React from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Something from './components/Something';
import reducers from './reducers';
import Router from './Router';

const App = () =>{
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return(
    <Provider store = {store}>
        <Router />
    </Provider>
  );
};

export default App;
