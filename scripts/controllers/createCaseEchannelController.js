	app.controller('createCaseEchannelController', function ($scope) {

	    // List EChannels
	    $scope.listEChannels = {
	        "echannels": [{
	                "echannelId": "???",
	                "name": "???",
	            },
	            {
	                "echannelId": "???",
	                "name": "???",

	            }
	        ]
	    };
	    $scope.listEChannels_info = {
	        "name": "listEChannels",
	        "description": "The CI added an echannel to the case, it is added to this list. Any changes to the echannels for a case e.g. delete are also reflected in this list",
	        "image": "images/listEChannels.png",
	        "endpoint": "GET /cases/{caseID}/products",
	        "parameters": 'Select that we are adding an echannel',
	        "parametersExample": 'type = "echannels"',
	        "returns": "list of echannels associated with the case",
	        "returnsExample": $scope.displayJSON($scope.listEChannels),
	        "notes": ""
	    };
	    $scope.listEChannelsDelete_info = {
	        "name": "listEChannels - delete",
	        "description": "the list of echannels has a delete icon. It will need to update the list too",
	        "image": "???",
	        "endpoint": "DELETE /cases/{caseID}/products/{productId}",
	        "parameters": "none",
	        "parametersExample": "none",
	        "returns": "n/a",
	        "returnsExample": "{}",
	        "notes": ""
	    };

	    // Create EChannel
	    $scope.createEChannel_input = {
	        "echannelId": "???",
	        "name": "???"
	    };
	    $scope.createEChannel_output = {
	        "echannelId": "???"
	    };
	    $scope.createEChannel_info = {
	        "name": "createEChannel",
	        "description": "The CI selected to create a new echannel and is presented with a modal containing the echannel form",
	        "image": "images/createEChannel.png",
	        "endpoint": "POST /cases/{caseID}/products/{entityId}",
	        "parameters": 'type="echannel" + details of the echannel to add',
	        "parametersExample": $scope.displayJSON($scope.createEChannel_input),
	        "returns": "echannelId that was added (might not be needed but could be handy)",
	        "returnsExample": $scope.displayJSON($scope.createEChannel_output),
	        "notes": "I am not certain about the names of the fields for this, we will need to decide make sure these are consistent with what is on the output pack as we don't want to have to map new field names to the existing output pack."
	    };







	});