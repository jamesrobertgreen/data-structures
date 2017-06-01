	app.controller('caseListController', function ($scope) {

	    // List Cases
	    $scope.listCases = {
	        "cases": [{
	            "caseId": "001",
	            "caseStatus": "Initial Request Incomplete",
	            "caseOwner": "Nawaf Hasan",
	            "caseCreationDate": "20/05/17",
	            "action": "Mark as Signed",
	            "entities": [{
	                "entityName": "Reebok UK",
	                "entityId": "890123"
                }],
	            "products": [{
	                "productId": "987",
	                "productDescription": "Account (UK)",
	                "owningEntityId": "890123"
                            }, {
	                "productId": "655",
	                "productDescription": "Echannel (UK)",
	                "owningEntityId": "890123"
                }],
	            "associatedCases": [{
	                "associationType": "child",
	                "caseId": "002"
	           }]
	       }]
	    };
	    $scope.listCase_info = {
	        "name": "listCases",
	        "description": "CI/Customer Logs in and is presented with a list of cases they have access to",
	        "image": "images/listCases.png",
	        "endpoint": "GET /cases",
	        "parameters": "none",
	        "returns": "JSON array of cases",
	        "returnsExample": $scope.displayJSON($scope.listCases),
	        "notes": "Access to cases and customer/ci differences determined by the API/auth token" +
	            "Associated child cases will be sent along with the parent." +
	            "Case list id will need to be passed to the create case page so that we can resume cases started previously."
	    };

	    // Create Case
	    $scope.createCase = {
	        "caseId": "005"
	    };
	    $scope.createCase_info = {
	        "name": "newCase",
	        "description": "CI presses new case button",
	        "image": "images/newCase.png",
	        "endpoint": "POST /cases",
	        "parameters": "none",
	        "returns": "Case id for newly created case",
	        "returnsExample": $scope.displayJSON($scope.createCase),
	        "notes": "We will have to use this received case Id to redirect to the create case page" +
	            "The id will also be passed in a similar way from the case list component."
	    };

	});
