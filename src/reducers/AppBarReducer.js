import {SHOW_SEARCHBAR, HIDE_SEARCHBAR} from '../actions/types';

const INITIAL_STATE = {
  'searchbar': false
};

export default(state = INITIAL_STATE, action) =>{

  switch(action.type){
    case SHOW_SEARCHBAR:
      return { 'searchbar': true};
    case HIDE_SEARCHBAR:
      return { 'searchbar': false };
    default:
      return state;
  }
};
