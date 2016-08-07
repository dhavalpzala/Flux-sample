var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var _states = [];
var _allCities = [];
var _cities = [];
var _selectedState = undefined;

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
  getStates: function() {
    return _states;
  },

  getSelectedState: function() {
    return _selectedState
  },

  getCities: function() {
    return _cities;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.type) {
    case 'GET_STATES':
      _states = action.states
      break;

    case 'GET_CITIES':
      _allCities = action.cities
      break;

    case 'CHANGE_STATE':
      _selectedState = action.state
      _cities = _allCities.filter(function(city) {
        return city.stateId == _selectedState
      })
      AppStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = AppStore;
