var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  getStates: function(states) {
    AppDispatcher.dispatch({
      type: "GET_STATES",
      states: states
    });
  },

  getCities: function(cities) {
    AppDispatcher.dispatch({
      type: "GET_CITIES",
      cities: cities
    });
  },

  changeState: function(state) {
    AppDispatcher.dispatch({
      type: "CHANGE_STATE",
      state: state
    });
  }
};
