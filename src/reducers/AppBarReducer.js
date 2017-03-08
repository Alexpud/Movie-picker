import {
  SHOW_SEARCHBAR,
  TYPE_SEARCHBAR,
  HIDE_SEARCHBAR
} from '../actions/types';

const INITIAL_STATE = {
  'searchValue': 'a',
  'searchbar': false
};

export default(state = INITIAL_STATE, action) =>{
  switch(action.type){
    case TYPE_SEARCHBAR:
      return {...state, searchValue: action.payload};
    case SHOW_SEARCHBAR:
      return {...state, 'searchbar': true};
    case HIDE_SEARCHBAR:
      return {...state, 'searchbar': false };
    default:
      return state;
  }
};
