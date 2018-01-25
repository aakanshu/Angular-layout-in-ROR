SampleApp.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $compileProvider, $locationProvider) {
  // Optimize load start with remove binding information inside the DOM element
  $compileProvider.debugInfoEnabled(true);
  // RestangularProvider.setRequestSuffix('.json');
  $locationProvider.html5Mode(true);
  $urlRouterProvider
	      .otherwise('/home');

  $stateProvider
        .state('home', {  
            url:'/home',
            templateUrl: 'home.html',
            controller: ['$scope', '$state', '$stateParams',
              function (  $scope,   $state, $stateParams) {
              }
            ]
        })
        
        .state('about', {  
            url:'/about',
            template: 'Step 1',
            controller: ['$scope', '$state', '$stateParams',
              function (  $scope,   $state, $stateParams) {
              }
            ]
        })

}]);