// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import citiesReducer from './reducers/city_reducer';
import selectedCityReducer from './reducers/active_city_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = combineReducers({
  // changeMe: (state = null, action) => state
  cities: citiesReducer,
  selectedCity: selectedCityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
