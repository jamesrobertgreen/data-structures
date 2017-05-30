	var routeApp = angular.module('dataStructureApp', []);

	routeApp.controller('mainController', function ($scope) {

	    $scope.displayJSON = function (obj) {
	        return angular.toJson(obj, true);
	    };


	    /*
	    $scope.listCaseDetails = {
	        "name": "TEST TEST",
	        "description": "",
	        "image": "",
	        "endpoint": "",
	        "parameters": "",
	        "returns": "",
	        "returnsExample": $scope.listCases,
	        "returnsOtherExample":
            '    <table> ' +
        '<tr ng-repeat="case in listCases.cases">' +
            '<td>{{case.caseId}}</td>' +
            '<td>{{case.entities[0].entityName}}</td>' +
            '<td>' +
                '<ul ng-repeat="product in case.products">' +
                    '<li>{{product.productDescription}}</li>' +
                '</ul>' +
            '</td>' +
        '</tr>' +
    '</table>',
	        "notes": ""
	    };
        */
	    $scope.listCaseDetails = {
	        "name": "TEST TEST",
	        "description": "",
	        "image": "",
	        "endpoint": "",
	        "parameters": "",
	        "returns": "",
	        "returnsExample": $scope.listCases,
	        "returnsOtherExample": '    <table> ' +
	            '<tr ng-repeat="case in listCases.cases">' +
	            '<td>{{case.caseId}}</td>' +
	            '<td>{{case.entities[0].entityName}}</td>' +
	            '<td>' +
	            '<ul ng-repeat="product in case.products">' +
	            '<li>{{product.productDescription}}</li>' +
	            '</ul>' +
	            '</td>' +
	            '</tr>' +
	            '</table>',
	        "notes": ""
	    };
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


	    // if we have the above, then it will be fine *as long as we  only receive one entity per case*....as otherwise I will have to go through and check who is the
	    // owning entity in the list of products to match them up on the UI.
	    // some other considerations if we go down this route:
	    // what happens if the case that is the "parent" is removed:
	    //1) remove the relationship to any children
	    //2) assign a new parent
	    //3) set all children to have the new child association
	    // what if an entity is removed after adding products on a case:
	    // do we remove the accounts/e-channels that are associated with that entity?
	    $scope.listCases2 = {
	        "cases": [{
	            "caseId": "001",
	            "caseStatus": "Initial Request Incomplete",
	            "caseOwner": "Nawaf Hasan",
	            "caseCreationDate": "20/05/17",
	            "action": "Mark as Signed",
	            "entities": [{
	                "entityName": "Reebok UK",
	                "entityId": "890123",
	                "products": [{
	                    "productId": "987",
	                    "productDescription": "Account (UK)"
                            }, {
	                    "productId": "655",
	                    "productDescription": "Echannel (UK)"
                    }]
                    }, {
	                "entityName": "Reebok FR",
	                "entityId": "890168",
	                "products": [{
	                    "productId": "567",
	                    "productDescription": "Account (UK)"
                            }, {
	                    "productId": "435",
	                    "productDescription": "Echannel (UK)"
                    }]
                }]
	       }]
	    };
	    $scope.createCase = {
	        "caseId": "005"
	    };

	    $scope.searchEntities = {
	        "entities": [{
	                "entityId": "123456",
	                "registeredName": "Crocs Footwear UK LTD"
	            }
	            , {
	                "entityId": "234567",
	                "registeredName": "Crocs Footwear France S.A"
	            }
	            , {
	                "entityId": "456789",
	                "registeredName": "Crocs Fashion Spain S.A"
	            }]
	    };

	    $scope.searchEntities_addSelected = {
	        "entities": [{
	            "entityId": "123456"
	        }, {
	            "entityId": "234567"
	        }]
	    };


	    $scope.createEntity_input = {
	        entity: {
	            "registeredName": "Entity Name",
	            "countryOfIncorporation": "France",
	            "incorporationNumber": "01534",
	            "dateOfIncorporation": "28/11/1983",
	            "taxNumber": "53523",
	            "corporateStatus": "status",
	            "businessSegment": "CMB",
	            "GRID": "111111"
	        }
	    };
	    /*        
	            companyDetails
	    ><registeredName
	    >E1_Sample_SIT_Test</registeredName
	    ><newRegisteredName
	    >E1_Sample_SIT_Test</newRegisteredName
	    ><CustomerEntityPackNo
	    >05052016-00045_1</CustomerEntityPackNo
	    ><countryOfIncorporation
	    >Aland Islands</countryOfIncorporation
	    ><incorporationNumber
	    /><dateOfIncorporation
	    /><taxNumber
	    /><nEditableRecord
	    /><corporateStatus
	    />

	    */
	    $scope.creatEntity_output = {
	        "entityId": "0012"
	    };


	    $scope.entityList = {
	        "entities": [{
	                "entityId": "123456",
	                "entityName": "Crocs Footwear UK LTD",
	                "conflicts": [{
	                    "caseId": "005"
	                        }, {
	                    "caseId": "006"
	                        }]
	            }
	            , {
	                "entityId": "234567",
	                "entityName": "Crocs Footwear France S.A",
	                "conflicts": [{
	                    "caseId": "007"
	                        }, {
	                    "caseId": "008"
	                        }]
	            }
	            , {
	                "entityId": "456789",
	                "entityName": "Crocs Fashion Spain S.A",
	                "conflicts": [{
	                    "caseId": "009"
	                        }, {
	                    "caseId": "010"
	                        }, {
	                    "caseId": "011"
	                        }]
	            }]
	    };
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

	    $scope.listAccounts = {
	        "accounts": [{
	                "accountNo": "00112",
	                "name": "UK salaries account",
	                "accountCountry": "UK",
	                "currency": "GBP"
	            },
	            {
	                "accountNo": "00114",
	                "name": "France Receivables",
	                "accountCountry": "FR",
	                "currency": "EUR"
	            }
	        ]
	    };

	    $scope.createAccount_input = {
	        "entityId": "001",
	        "accountCountry": "UK",
	        "resident": "Y",
	        "type": "Business Cheque Account",
	        "currency": "USD",
	        "name": "Crocs footwear UK Ltd",
	        "accountNo": "00513",
	        "bankCode": "445",
	        "name": "UK Business Cheque Account GBP"
	    };

	    $scope.createAccount_output = {
	        "accountNo": "00513"
	    };


	});

	routeApp.directive("componentDirective", function () {
	    return {
	        restrict: "EA",
	        templateUrl: '/templates/component-directive.html'
	    };
	});