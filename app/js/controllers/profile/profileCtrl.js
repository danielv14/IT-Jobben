angular
  .module('app')

    // Controller for about
    .controller('profileCtrl', [
      '$scope',
      '$rootScope',
      'User',
      function($scope, $rootScope, User) {

        // set page header title
        $rootScope.header = 'Min profil - IT Jobben';

        // get authData from current user as an object
        var currentUser = User.UserObject();
        $scope.user = currentUser.facebook.cachedUserProfile;

        // get all saved ads
        $scope.savedAds = User.getSavedAdsArray(currentUser.facebook.id);

        // get all saved searchterms
        $scope.savedSearchTerms = User.getSavedSearchTerms(currentUser.facebook.id);

    }]);
