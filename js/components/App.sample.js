var AppStore = require('../stores/AppStore');
var AppAction = require('../actions/AppAction');
var React = require('react');

function getStatesFromStores() {
  return {
    states: AppStore.getStates(),
    selectedState: AppStore.getSelectedState(),
    cities: AppStore.getCities()
  };
}

var App = React.createClass({
  getInitialState: function() {
    return getStatesFromStores();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="state-city-container">
        <div>
          <label>State</label>
          <select onChange={this.onStateChange} value={this.state.selectedState}>
            <option selected value> -- select state -- </option>
            {this.state.states.map(function(state, index){
              return <option value={ state.stateId }>{state.state}</option>
            })}
          </select>
        </div>
        <div>
          <label>City</label>
          <select value={this.selectedCity}>
            <option selected value> -- select city -- </option>
            {this.state.cities.map(function(city, index){
              return <option value={ city.cityId }>{city.city}</option>
            })}
          </select>
        </div>
      </div>
    );
  },

  onStateChange: function() {
    AppAction.changeState(event.target.value)
  },
  /**
  * Event handler for 'change' events coming from the MessageStore
  */
   _onChange: function() {
     this.setState(getStatesFromStores());
   }
});

module.exports = App;
