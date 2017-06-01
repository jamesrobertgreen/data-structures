	var app = angular.module('dataStructureApp', ['ngRoute']);

	app.config(function ($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl: 'pages/caseList.html',
	        controller: 'caseListController'
	    }).when('/createCaseEntity', {
	        templateUrl: 'pages/createCaseEntity.html',
	        controller: 'createCaseEntityController'
	    }).when('/createCaseEntityDetails', {
	        templateUrl: 'pages/createCaseEntityDetails.html',
	        controller: 'createCaseEntityController'
	    }).when('/createCaseAccount', {
	        templateUrl: 'pages/createCaseAccount.html',
	        controller: 'createCaseAccountController'
	    }).when('/createCaseGLS', {
	        templateUrl: 'pages/createCaseGLS.html',
	        controller: 'createCaseGLSController'
	    }).when('/createCaseEchannel', {
	        templateUrl: 'pages/createCaseEchannel.html',
	        controller: 'createCaseEchannelController'
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