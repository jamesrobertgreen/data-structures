	var routeApp = angular.module('dataStructureApp', []);


	routeApp.controller('mainController', function ($scope) {

	    $scope.listCases = {
	        "cases": [
	            {
	                "caseID": "002",
	                "caseStatus": "Initial Request Incomplete",
                    "caseOwner":"Nawaf Hasan",
                    "caseCreationDate": "20/05/17",
                    "action":"Mark as Signed",
	                "entities": [{
	                        "entityName": "Reebok UK",
	                        "entityID": "890123",
	                        "products": [{
	                                "productID": "987",
	                                "productDescription": "Account (UK)"
	                            },
	                            {
	                                "productID": "655",
	                                "productDescription": "Echannel (UK)"
	                            },
	                            {
	                                "productID": "234",
	                                "productDescription": "GLS Service"
	                            }
                                    ]
                    }, {
	                        "entityName": "Reebok France",
	                        "entityID": "901234",
	                        "products": [{
	                                "productID": "987",
	                                "productDescription": "Account (UK)"
	                            },
	                            {
	                                "productID": "655",
	                                "productDescription": "GLS Services"
	                            }
                                    ]
                    }


                                ]

	            }]
	    };
        
        
        
        
	});