angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('TransactionsCtrl', function($scope, Transactions) {
  $scope.transactions = Transactions.all();
})

.controller('TransactionDetailCtrl', function($scope, $stateParams, Transactions) {
  $scope.transaction = Transactions.get($stateParams.transactionId);

  $scope.saveTransaction = function(transaction) {
    Transactions.save(transaction);
  };
})

.controller('AccountCtrl', function($scope) {
})

.directive('bgDateInputValue', ['dateFilter', function(dateFilter) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$formatters.unshift(function(data) {
                return dateFilter(data, 'yyyy-MM-dd');
            });

            ngModel.$parsers.push(function(data) {
                return new Date(data);
            });
        }
    };
}])

.directive('bgNumberInputValue', function(currencyFilter) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$formatters.unshift(function(data) {
                return parseFloat(data).toFixed(2);
            });

            ngModel.$parsers.push(function(data) {
                return parseFloat(data);
            });
        }
    };
});
