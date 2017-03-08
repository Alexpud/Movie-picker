import axios from 'axios';
import {
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES,
  FETCH_MOVIE
} from '../actions/types';

const INITIAL_STATE = {
  movie: '',
  movies: [],
  loading: false
};

export default(state = INITIAL_STATE, action) =>{

  switch(action.type){
    case FETCH_MOVIES:
      return {...state, loading: true};
    case FETCH_MOVIE:
      return {...state, loading: true};
    case FETCH_MOVIE_SUCCESS:
      return {...state, movie: action.payload, loading: false};
    case FETCH_MOVIES_SUCCESS:
      return {...state, movies: action.payload, loading: false};
    case FETCH_MOVIES_FAILED:
      return {...state, movies: action.payload, loading: false};
    default:
      return state;
  }
};
