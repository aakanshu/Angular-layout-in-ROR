var SampleApp = angular.module('homer', [
    'ui.router',                // Angular flexible routing
    'templates'                 // HTML Template cache 
    // 'restangular',              // For REST API calls,
  ]);
  
  var csrfTokenOverrider = function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = jQuery('meta[name=csrf-token]').attr('content');
  };
  
  SampleApp.config(["$httpProvider", csrfTokenOverrider]);
    
  SampleApp.run( ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ])