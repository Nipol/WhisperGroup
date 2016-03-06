(function() {
'use strict';

angular
  .module('WhisperGroup', [
  ]);

angular
  .module('WhisperGroup')
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .value('$routerRootComponent', 'app');
  /*
  Not yet Route table
  .run(function($rootRouter) {
    $rootRouter.config([
      {}
    ]);
  });
  */

angular
  .module('WhisperGroup')
  .component('app', {
    restrict: 'E',
    template: `<ng-outlet></ng-outlet>`,
  });

angular
  .bootstrap(document, ['WhisperGroup']); 
})();