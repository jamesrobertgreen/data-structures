	app.controller('createCaseEntityController', function ($scope) {

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
	        "endpoint": "GET /cases/{caseId}/conflicts",
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
});


