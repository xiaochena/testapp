import * as redux from 'redux';

const defaultState = {
  number: 0,
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'ADD':
      return { number: state.number + action.add };
    case 'SUB':
      return { number: state.number - action.sub };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

export default store;
