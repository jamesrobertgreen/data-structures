	app.controller('createCaseGLSController', function ($scope) {
	    // List GLS
	    $scope.listGLS = {
	        "GLS": [{
	                "GLSId": "???",
	                "name": "???"
	            },
	            {
	                "GLSId": "???",
	                "name": "???"
	            }
	        ]
	    };
	    $scope.listGLS_info = {
	        "name": "listGLS",
	        "description": "The CI added an GLS to the case, it is added to this list. Any changes to the GLS for a case e.g. delete are also reflected in this list",
	        "image": "images/listGLS.png",
	        "endpoint": "GET /cases/{caseID}/products",
	        "parameters": 'Select that we are adding an GLS',
	        "parametersExample": 'type = "GLS"',
	        "returns": "list of GLS associated with the case",
	        "returnsExample": $scope.displayJSON($scope.listGLS),
	        "notes": ""
	    };
	    $scope.listGLSDelete_info = {
	        "name": "listGLS - delete",
	        "description": "the list of GLS has a delete icon. It will need to update the list too",
	        "image": "???",
	        "endpoint": "DELETE /cases/{caseID}/products/{productId}",
	        "parameters": "none",
	        "parametersExample": "none",
	        "returns": "n/a",
	        "returnsExample": "{}",
	        "notes": ""
	    };

	    // Create GLS
	    $scope.createGLS_input = {
	        "GLSId": "???",
	        "name": "???"
	    };
	    $scope.createGLS_output = {
	        "GLSId": "???"
	    };
	    $scope.createGLS_info = {
	        "name": "createGLS",
	        "description": "The CI selected to create a new GLS and is presented with a modal containing the GLS form",
	        "image": "images/createGLS.png",
	        "endpoint": "POST /cases/{caseID}/products/{entityId}",
	        "parameters": 'type="GLS" + details of the GLS to add',
	        "parametersExample": $scope.displayJSON($scope.createGLS_input),
	        "returns": "GLSId that was added (might not be needed but could be handy)",
	        "returnsExample": $scope.displayJSON($scope.createGLS_output),
	        "notes": "I am not certain about the names of the fields for this, we will need to decide make sure these are consistent with what is on the output pack as we don't want to have to map new field names to the existing output pack."
	    };




	});