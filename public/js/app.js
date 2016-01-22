'use strict';

angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/index.html'
      })

      .state('singleAd', {
        url: '/annonsid/2819163',
        templateUrl: 'templates/singleAd.html'
      })



      .state('searchresults', {
        url: '/searchresults',
        templateUrl: 'templates/searchResults.html'
      })

      .state('workgroups', {
        url: '/workgroups',
        templateUrl: 'templates/workGroups.html'
      })

      .state('workgroupsID', {
        url: '/workgroups/:workgroupID',
        templateUrl: 'templates/workGroupID.html'
      })

      .state('yrkeDetail', {
        url: '/profession/:professionID',
        templateUrl: 'templates/professionDetails.html'
      })



  }]);
