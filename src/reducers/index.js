import {combineReducers} from 'redux';
import MovieReducer from './MovieReducer';
import AppBarReducer from './AppBarReducer';

export default combineReducers({
  movies: MovieReducer,
  appBar: AppBarReducer
});
