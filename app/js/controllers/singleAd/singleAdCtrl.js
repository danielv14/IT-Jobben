angular
  .module('app')
    // Controller for viewing single ad
    .controller('singleAdCtrl', [
      '$scope',
      '$http',
      '$routeParams',
      '$rootScope',
      function($scope, $http, $routeParams, $rootScope) {


      // Create variable from param
      var ad = $routeParams.adID;

      // array for random image class to use with jumbotron image
      var randomImage = [
        'code1',
        'code2',
        'code3',
        'code4',
        'code5'
      ];

      // get a random item from image array and assign to scope variables
      $scope.randomImgClass = randomImage[Math.floor(Math.random()*randomImage.length)];

      $http.get('api/singleAd/' + ad + '', {
        ignoreLoadingBar: false
      })
      .then(function(response) {
        var adInfo = response.data.body;
        // attach response to scope variables
        $rootScope.header         = adInfo.platsannons.annons.annonsrubrik;
        $scope.annons             = adInfo.platsannons.annons;
        $scope.ansokan            = adInfo.platsannons.ansokan;
        $scope.arbetsplats        = adInfo.platsannons.arbetsplats;
        $scope.krav               = adInfo.platsannons.krav;
        $scope.driverslicenseList = adInfo.platsannons.krav.korkortslista;
        $scope.villkor            = adInfo.platsannons.villkor;

        // do logic depending on what the response contains
        // logic for sista ansökningsdag
        if ($scope.ansokan.sista_ansokningsdag) {
          if ($scope.ansokan.sista_ansokningsdag === '') {
            $scope.sista_ansokningsdag = 'ingen info';
          } else {
            $scope.sista_ansokningsdag = moment($scope.ansokan.sista_ansokningsdag).format("dddd, Do MMMM, h:mm");
          }
        } else {
          $scope.sista_ansokningsdag = 'ingen info';
        }

        // logic for referens
        if ($scope.ansokan.referens) {
          if ($scope.ansokan.referens === '') {
            $scope.referens = 'ingen info';
          } else {
            $scope.referens = $scope.ansokan.referens;
          }
        } else {
          $scope.referens = 'ingen info';
        }

        // logic for email
        if ($scope.ansokan.epostadress) {
          if ($scope.ansokan.epostadress === '') {
            $scope.epost = 'ingen info';
          } else {
            $scope.epost = $scope.ansokan.epostadress;
          }
        } else {
          $scope.epost = 'ingen info';
        }

        // logic for egenbil
        if ($scope.krav.egenbil) {
            $scope.bil = 'Annonsen kräver egen bil';
          } else {
            $scope.bil = 'Inget krav om egen bil';
          }

        // logic for kontaktperson
        if ($scope.arbetsplats.kontaktpersonlista) {
          $scope.kontaktpersoner = $scope.arbetsplats.kontaktpersonlista.kontaktpersondata;
          $scope.kontaktNamn = $scope.arbetsplats.kontaktpersonlista.kontaktpersondata.namn;
        } else {
          $scope.kontaktperson = 'Ingen info';
        }

      }); // end of http then

    }]);
