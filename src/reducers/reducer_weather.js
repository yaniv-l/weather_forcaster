import { FETCH_WEATHER } from '../actions/index';

export default function(state = {}, action){
  //console.log('Action received: ', action); // For debud
  switch(action.type){
    case FETCH_WEATHER:
      // Never ever manipulate/change the state inside a reducer, i.e never do something like this.setState(...) inside a reducer.
      // As we our state to create a list of searched cirty for forcast, will crate and array and we need to always add the current payload.data array to the current state array. On the other hand, we cannot change the array from within the reducer, so we cannot do state.push(action.payload.data), but we need the reducer to return a new array which winclude new action.payload.data as well as current state array.
      //return state.concat([ action.payload.data ]); // concat does not change the state object but insead returns a new array.

      // The following is an ES6 syntax effiency format which retrun a new array which is a concat of 2 - this line is identical to the following: return state.concat([ action.payload.data ])
      return [ action.payload.data, ...state ];
  }
  return state;
}
