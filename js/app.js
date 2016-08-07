var App = require('./components/App.sample');
var InitData = require('./utils/InitData');
var WebAPIUtils = require('./utils/WebAPIUtils');
var React = require('react');

InitData.init();

WebAPIUtils.getStatesAndCities();

React.renderComponent(
  <App />,
  document.getElementById('react')
);
