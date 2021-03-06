angular
  .module('app')

    // Controller to all professions in a workgroup
    .controller('workGroupIDCtrl', [
      '$scope',
      '$http',
      '$routeParams',
      '$rootScope',
      'WorkgroupHttp',
      function($scope, $http, $routeParams, $rootScope, WorkgroupHttp) {

      // set page title
      $rootScope.header = sessionStorage.getItem("workgroupName") + ' - IT Jobben';

      // Create variable from param
      var workGroupID = $routeParams.workgroupID;

      // fetch current workgroup
      $scope.currentWorkgroup = sessionStorage.getItem("workgroupName");

      // fetch breadcrumb for workgroup and assign to scope
      $scope.workgroupBreadcrumb = sessionStorage.getItem("workgroupBread");

      // reset pagination back too 1
      sessionStorage.setItem("paginationProfession", '1');
      workGroupID

      WorkgroupHttp.insideWorkgroup(workGroupID).then(function(response) {
        $scope.data = response;
        $scope.howMany = response.data.body.soklista.totalt_antal_platsannonser + ' annonser';
        console.log(response);
        $scope.workgroup = response.data.body.soklista.sokdata;
      });

      // set sorting
      $scope.sortType = 'namn'; // default sorting
      $scope.sortReverse = false; // default to a-z, 1-9 etc

      // change current state of workgroup
      $scope.setProfession = function(yrke, breadcrumb) {
        // set sessionStorage
        sessionStorage.setItem("professionName", yrke);
        sessionStorage.setItem("professionBread", breadcrumb);
      };

    }]);
