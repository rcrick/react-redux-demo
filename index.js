import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Header from './containers/Header';
import Content from './containers/Content';
// import { Provider } from './react-redux';
import { Provider } from 'react-redux';
import './index.css';

// function createStore(reducer) {
//   let state = null;
//   const listeners = [];
//   const subScribe = listener => listeners.push(listener);
//   const getState = () => state;
//   const dispatch = action => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
//   dispatch({});
//   return { getState, subScribe, dispatch };
// }

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: 'red'
    };
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      };
    default:
      return state;
  }
};

const store = createStore(themeReducer);
class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);