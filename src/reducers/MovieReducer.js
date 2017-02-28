import axios from 'axios';
import {FETCH_MOVIE_SUCCESS, FETCH_MOVIE} from '../actions/types';

const INITIAL_STATE = {
  movie: '',
  loading: false
};

export default(state = INITIAL_STATE, action) =>{

  switch(action.type){
    case FETCH_MOVIE:
      return {...state, loading: true}
    case FETCH_MOVIE_SUCCESS:
      return {...state, movie: action.payload, loading: false}
    default:
      return state;
  }
};
