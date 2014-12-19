angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('TransactionsCtrl', function($scope, Transactions) {
  $scope.transactions = Transactions.all();
})

.controller('TransactionDetailCtrl', function($scope, $stateParams, Transactions) {
  $scope.transaction = Transactions.get($stateParams.transactionId);
})

.controller('AccountCtrl', function($scope) {
});
