angular
  .module('app')

    // Controller to get all municipalities in a county
<<<<<<< HEAD
    .controller('municipalityAdsCtrl', [
      '$scope',
      '$http',
      '$stateParams',
      'LocationState',
      'BreadcrumbState',
      function($scope, $http, $stateParams, LocationState, BreadcrumbState) {

        // Create variable from param
        var municipalityID = $stateParams.municipalityID;


        // fetch current municipality name and county name
        $scope.currentMunicipality = LocationState.getMunicipality();
        $scope.currentCounty = LocationState.getCounty();

        // fetch current municipality and county breadcrumbs
        $scope.currentMunicipalityBreadcrumb = BreadcrumbState.getMunicipalityBreadcrumb();
        $scope.currentCountyBreadcrumb = BreadcrumbState.getCountyBreadcrumb();

        // make http req
        $http.get('http://localhost:1339/location/municipality/' + municipalityID)
        .then(function(response) {
          $scope.howManyAds = response.data.body.matchningslista.antal_platsannonser_exakta;
          $scope.howManyAdsNear = response.data.body.matchningslista.antal_platsannonser_narliggande;
          $scope.ads = response.data.body.matchningslista.matchningdata;
          console.log(response);
          // $scope.workgroup = response.data.body.soklista.sokdata;
        })




=======
    .controller('municipalityAdsCtrl', ['$scope', '$http', '$stateParams', 'LocationState', 'BreadcrumbState', function($scope, $http, $stateParams, LocationState, BreadcrumbState) {

      // Create variable from param
      var municipalityID = $stateParams.municipalityID;


      // fetch current municipality name and county name
      $scope.currentMunicipality = LocationState.getMunicipality();
      $scope.currentCounty = LocationState.getCounty();

      // fetch current municipality and county breadcrumbs
      $scope.currentMunicipalityBreadcrumb = BreadcrumbState.getMunicipalityBreadcrumb();
      $scope.currentCountyBreadcrumb = BreadcrumbState.getCountyBreadcrumb();

      // make http req
      $http.get('http://localhost:1339/location/municipality/' + municipalityID)
      .then(function(response) {
        $scope.howManyAds = response.data.body.matchningslista.antal_platsannonser_exakta;
        $scope.howManyAdsNear = response.data.body.matchningslista.antal_platsannonser_narliggande;
        console.log($scope.howManyAdsNear);
        $scope.ads = response.data.body.matchningslista.matchningdata;
        console.log(response);
        // $scope.workgroup = response.data.body.soklista.sokdata;
      })

>>>>>>> parent of 92aa77b... infinity scroll

    }])
