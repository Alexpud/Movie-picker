import {
  SHOW_SEARCHBAR,
  TYPE_SEARCHBAR,
  HIDE_SEARCHBAR
} from './types';

export const typeSearchBar = (text) =>{
  return{
    type: TYPE_SEARCHBAR,
    payload: text
  };
};

export const showSearchBar = () =>{
  return{
    type: SHOW_SEARCHBAR
  };
};

export const hideSearchBar = () =>{
  return{
    type: HIDE_SEARCHBAR
  };
};
