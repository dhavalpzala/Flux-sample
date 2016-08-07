var AppAction = require('../actions/AppAction');

module.exports = {
  getStatesAndCities: function() {
    var states = JSON.parse(localStorage.getItem('states'));
    var cities = JSON.parse(localStorage.getItem('cities'));
    AppAction.getStates(states);
    AppAction.getCities(cities);
  }
};
