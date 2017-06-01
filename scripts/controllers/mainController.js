	app.controller('mainController', function ($scope) {
	    $scope.displayJSON = function (obj) {
	        return angular.toJson(obj, true);
	    };

	});