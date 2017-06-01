	var app = angular.module('dataStructureApp', ['ngRoute']);

	app.config(function ($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl: 'pages/caseList.html'
	        , controller: 'caseListController'
	    }).when('/createCase', {
	        templateUrl: 'pages/createCase.html'
	        , controller: 'createCaseController'
	    }).otherwise({
	        redirectTo: '/'
	    });
	});

	app.directive("component", function () {
	    return {
	        restrict: "E",
	        scope: {
	            component: '=details'
	        },
	        templateUrl: './templates/component-directive.html'
	    };
	});