var app=angular.module('app',[]);
app.config(function($routeProvider, $controllerProvider,$compileProvider){
 app.registerCtrl = $controllerProvider.register;
  app.compileProvider    = $compileProvider.directive;
		$routeProvider
		.when('/employeeTimeSheet',{
			controller:'MainCtrl',
			templateUrl:'employeeTimeSheet.html'
		})
		.when('/employeeLogin',{
			templateUrl:'employeeDashboard.html'
		})
		.otherwise({redirectTo:'/employeeLogin'});

});
