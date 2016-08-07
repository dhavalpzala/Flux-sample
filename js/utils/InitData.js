module.exports = {

  init: function() {
    localStorage.clear();
    localStorage.setItem('states', JSON.stringify([{
        'stateId': 1,
        'state': 'Gujarat'
      },
      {
        'stateId': 2,
        'state': 'Telangana'
      }]));

    localStorage.setItem('cities', JSON.stringify([{
        'cityId': 1,
        'city': 'Ahmedabad',
        'stateId': 1
      },
      {
        'cityId': 2,
        'city': 'Surat',
        'stateId': 1
      },
      {
        'cityId': 3,
        'city': 'Baroda',
        'stateId': 1
      },
      {
        'cityId': 4,
        'city': 'Rajkot',
        'stateId': 1
      },
      {
        'cityId': 5,
        'city': 'Hyderabad',
        'stateId': 2
      },
      {
        'cityId': 6,
        'city': 'Warangal',
        'stateId': 2
      },
      {
        'cityId': 7,
        'city': 'Vizag',
        'stateId': 2
      }]));
  }
};
