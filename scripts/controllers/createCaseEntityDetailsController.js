	app.controller('createCaseEntityDetailsController', function ($scope) {

	    /*
	    $scope.listCaseDetails = {
	        "name": "TEST TEST",
	        "description": "",
	        "image": "",
	        "endpoint": "",
	        "parameters": "",
	        "parametersExample": "",
	        "returns": "",
	        "returnsExample": $scope.,,
	        "notes": ""
	    };
        */

	    $scope.entityDetails = {
	        "entityId": "001",
	        "entityName": "Crocs footwear UK LTD",
	        "entityAddress": "10 King Street"
	    };
	    $scope.gdocsHistory = {
	        "cases": [{
	                "caseId": "001",
	                "service": "Account opening",
	                "country": "Argentina",
	                "date": "13 Jun '16",
	                "outputPackRef": "1234567",
	                "documents": [{
	                    "documentName": "MSA"
	                        }, {
	                    "documentName": "RAF"
	                        }]
	                    }
	                    , {
	                "caseId": "002",
	                "service": " E-channel",
	                "country": "Argentina",
	                "date": "13 Jun '16",
	                "outputPackRef": "1234567",
	                "documents": [{
	                    "documentName": "doc1"
	                        }, {
	                    "documentName": "doc2"
	                        }]
	                    }
	                ]
	    };

	});