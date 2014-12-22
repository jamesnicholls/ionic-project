angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Transactions', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var transactions = [
    { id: 1, description: 'Lunch, Pret a Manger', amount: -4.89, date: new Date(2014, 12, 14) },
    { id: 2, description: 'Mobile bill, Tesco', amount: -15.10, date: new Date(2014, 12, 7) },
    { id: 3, description: 'Groceries, Waitrose', amount: -27.30, date: new Date(2014, 12, 3) }
  ];

  return {
    all: function() {
      return transactions;
    },
    get: function(id) {
      if (!id) {
        return {
          id: null,
          description: '',
          amount: 0,
          date: new Date()
        };
      }
      // Simple index lookup
      return transactions[id];
    }
  };
});
