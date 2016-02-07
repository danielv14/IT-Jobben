angular
  .module('app')

    // Controller to view all counties
    .controller('countiesCtrl', ['$scope', '$http', '$stateParams', 'LocationState', 'BreadcrumbState', function($scope, $http, $stateParams, LocationState, BreadcrumbState) {



      $http.get('http://localhost:1339/location/counties', {
        ignoreLoadingBar: true
      })
      .then(function(response) {
        $scope.counties = response.data.body.soklista.sokdata;
        console.log(response);
      })

      // set locationState upon clicking a county
      $scope.setLocation = function(location, breadcrumb) {
        console.log('du klickade på', location);
        // set factory states
        LocationState.setCounty(location);
        BreadcrumbState.setCountyBreadcrumb(breadcrumb);

      }

    }])

    // Child Controller to get number of ads in a county
    .controller('countyChildCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

      $http.get('http://localhost:1339/location/match/county/' + $scope.county.id +'', {
        ignoreLoadingBar: true
      })
      .then(function(response) {
        $scope.adsInCounty = response.data.body.matchningslista.antal_platsannonser_exakta;
      })

    }])
