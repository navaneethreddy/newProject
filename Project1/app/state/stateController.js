/**
 * Created by Navaneeth on 12/14/2016.
 */
'use strict';

/**
 * @ngdoc function
 * @name navaneethApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the navaneethApp
 */
angular.module('stateCode',['ngRoute'])
  .config(function ($routeProvider) {
  $routeProvider.when('/state', {templateUrl: 'state/statePage.html', controller: 'StateCtrl'})
    .otherwise({
      redirectTo: '/'
    });
})
  .controller('StateCtrl', function () {

  });
