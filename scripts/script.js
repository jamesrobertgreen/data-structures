	var routeApp = angular.module('dataStructureApp', []);

	routeApp.controller('mainController', function ($scope) {

	    $scope.displayJSON = function (obj) {
	        return angular.toJson(obj, true);
	    };

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
	        "endpoint": "GET /cases ",
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

	    // Search Entities
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
	    $scope.searchEntities_info = {
	        "name": "searchEntities",
	        "description": "CI is brought to the entities sectionß",
	        "image": "images/searchEntities.png",
	        "endpoint": "GET /entities",
	        "parameters": "search_criteria TBC",
	        "returns": "JSON array of entity objects",
	        "returnsExample": $scope.displayJSON($scope.searchEntities),
	        "notes": ""
	    };
	    $scope.searchEntities_addSelected = {
	        "entities": [{
	            "entityId": "123456"
	        }, {
	            "entityId": "234567"
	        }]
	    };
	    $scope.searchEntities_addSelected_info = {
	        "name": "searchEntities_addSelected",
	        "description": "The CI selects to add the entities selected from their search",
	        "image": "images/searchEntities_addSelected.png",
	        "endpoint": "POST /{caseId}/entities/associate",
	        "parameters": "list of caseids to associate with case.",
	        "parametersExample": $scope.displayJSON($scope.searchEntities_addSelected),
	        "returns": "none",
	        "returnsExample": "{}",
	        "notes": "n/a"
	    };
	    $scope.searchEntities_createEntity_info = {
	        "name": "searchEntities_createEntity",
	        "description": "The CI selects create entity as the entity is not in the list",
	        "image": "images/searchEntities_createEntity.png",
	        "endpoint": "This will need to open a new modal, pre-filled with the text entered on the search as the new entity name",
	        "parameters": "TBC. This will be decided at a later date as it doesn't require the experience API.",
	        "parametersExample": "TBC",
	        "returns": "n/a",
	        "returnsExample": "n/a",
	        "notes": "n/a"
	    };


	    // Entity list / Conflicts
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
	    $scope.entityList_info = {
	        "name": "entityConflicts",
	        "description": "List of entities that will be retrieved when entering the page (for resuming) and updated if an entity is deleted or if an entity is added.",
	        "image": "????",
	        "endpoint": "GET /{caseId}/conflicts",
	        "parameters": "none",
	        "parametersExample": "none",
	        "returns": "JSON array of entity objects",
	        "returnsExample": $scope.entityList,
	        "notes": ""
	    };
	    $scope.entityListDelete_info = {
	        "name": "entityConflicts - delete",
	        "description": "The list of entities has a delete icon. It will need to update the list too",
	        "image": "???",
	        "endpoint": "DELETE /cases/{caseId}/entities/{entityId}",
	        "parameters": "none",
	        "parametersExample": "none",
	        "returns": "none",
	        "returnsExample": "{}",
	        "notes": ""
	    };


	    // Create Entity
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
	    $scope.creatEntity_output = {
	        "entityId": "0012"
	    };
	    $scope.createEntity_info = {
	        "name": "createEntity",
	        "description": "The CI selected to create a new entity and is presented with a modal containing the entity form",
	        "image": "images/createEntity.png",
	        "endpoint": "POST /{caseId}/entities",
	        "parameters": "details of the entity to add",
	        "parametersExample": $scope.displayJSON($scope.createEntity_input),
	        "returns": "entityId that was added (might not be needed but could be handy)",
	        "returnsExample": $scope.displayJSON($scope.createEntity_output),
	        "notes": "The GRID field seems to be new i.e. I couldn't see it in the example output/input pack XML that Alex shared with us. We will have to be careful of the names we use for these fields, as they need to map to the names used on the output pack."
	    };


	    // List Accounts
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
	    $scope.listAccounts_info = {
	        "name": "listAccounts",
	        "description": "The CI added an account to the case, it is added to this list. Any changes to the accounts for a case e.g. delete are also reflected in this list",
	        "image": "images/listAccounts.png",
	        "endpoint": "GET /cases/{caseID}/products",
	        "parameters": 'Select that we are adding an account',
	        "parametersExample": 'type = "accounts"',
	        "returns": "list of accounts associated with the case",
	        "returnsExample": $scope.displayJSON($scope.listAccounts),
	        "notes": ""
	    };
	    $scope.listAccountsDelete_info = {
	        "name": "listAccounts - delete",
	        "description": "the list of accounts has a delete icon. It will need to update the list too",
	        "image": "???",
	        "endpoint": "DELETE /cases/{caseID}/products/{productId}",
	        "parameters": "none",
	        "parametersExample": "none",
	        "returns": "n/a",
	        "returnsExample": "{}",
	        "notes": ""
	    };

	    // Create Account
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
	    $scope.createAccount_info = {
	        "name": "createAccount",
	        "description": "The CI selected to create a new account and is presented with a modal containing the account form",
	        "image": "images/createAccount.png",
	        "endpoint": "POST /cases/{caseID}/products/{entityId}",
	        "parameters": 'type="account" + details of the account to add',
	        "parametersExample": $scope.displayJSON($scope.createAccount_input),
	        "returns": "accountId that was added (might not be needed but could be handy)",
	        "returnsExample": $scope.displayJSON($scope.createAccount_output),
	        "notes": "I am not certain about the names of the fields for this, we will need to decide make sure these are consistent with what is on the output pack as we don't want to have to map new field names to the existing output pack."
	    }

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

	routeApp.directive("component", function () {
	    return {
	        restrict: "E",
	        scope: {
	            component: '=details'
	        },
	        templateUrl: './templates/component-directive.html'
	    };
	});