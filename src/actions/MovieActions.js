import axios from 'axios';
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIES_SUCCESS
} from './types';
export const fetchMovies = (title) =>{
  return(dispatch) =>{
    dispatch({type: FETCH_MOVIES});
    axios.get('http://www.omdbapi.com/?s='+title+'&y=&plot=short&r=json')
      .then(response => {
        dispatch({type: FETCH_MOVIES_SUCCESS, payload: response.data.Search});
      })
      .catch(error =>{
        return {error: error};
      });
  };
};

export const fetchMovie = (title) =>{
  console.log("fetch movie");
  return(dispatch) =>{
    dispatch({type: FETCH_MOVIE});
    axios.get('http://www.omdbapi.com/?t='+title+'&y=&plot=short&r=json')
      .then(response => {
        dispatch({type: FETCH_MOVIE_SUCCESS, payload: response.data});
      })
      .catch(error =>{
        return {error: error};
      });
  };
};
