angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Transactions', ['$window', function($window) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var transactions = [
  //   { id: 1, description: 'Lunch, Pret a Manger', amount: -4.89, date: new Date(2014, 12, 14) },
  //   { id: 2, description: 'Mobile bill, Tesco', amount: -15.10, date: new Date(2014, 12, 7) },
  //   { id: 3, description: 'Groceries, Waitrose', amount: -27.30, date: new Date(2014, 12, 3) }
  // ];

  function getTransactions() {
    return JSON.parse($window.localStorage['transactions'] || '[]');
  }

  return {
    all: function() {
      return getTransactions();
    },

    get: function(id) {
      var transaction  = {
        id: null,
        description: '',
        amount: 0,
        date: new Date()
      };

      getTransactions().some(function(t) {
        if (t.id == id) {
          transaction = t;
          return true;
        }
      });

      return transaction;
    },

    save: function(transaction) {
      var transactions = getTransactions();
      var idx;

      if (transaction.id) {
        transactions.some(function(t, i) {
          if (t.id == transaction.id) {
            idx = i;
            return true;
          }
        });

        transactions.splice(idx, 1, transaction);
      } else {
        transaction.id = transactions.length;
        transactions.push(transaction);
      }

      $window.localStorage['transactions'] = JSON.stringify(transactions);
    }
  };
}]);
