	var routeApp = angular.module('dataStructureApp', []);
	routeApp.controller('mainController', function ($scope) {
	    $scope.listCases = {
	        "cases": [{
	            "caseId": "001"
	            , "caseStatus": "Initial Request Incomplete"
	            , "caseOwner": "Nawaf Hasan"
	            , "caseCreationDate": "20/05/17"
	            , "action": "Mark as Signed"
	            , "entities": [{
	                "entityName": "Reebok UK"
	                , "entityId": "890123"
                }]
	            , "products": [{
	                "productId": "987"
	                , "productDescription": "Account (UK)"
	                , "owningEntityId": "890123"
                            }, {
	                "productId": "655"
	                , "productDescription": "Echannel (UK)"
	                , "owningEntityId": "890123"
                }]
	            , "associatedCases": [{
	                "associationType": "child"
	                , "caseId": "002"
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
	            "caseId": "001"
	            , "caseStatus": "Initial Request Incomplete"
	            , "caseOwner": "Nawaf Hasan"
	            , "caseCreationDate": "20/05/17"
	            , "action": "Mark as Signed"
	            , "entities": [{
	                "entityName": "Reebok UK"
	                , "entityId": "890123"
	                , "products": [{
	                    "productId": "987"
	                    , "productDescription": "Account (UK)"
                            }, {
	                    "productId": "655"
	                    , "productDescription": "Echannel (UK)"
                    }]
                    }, {
	                "entityName": "Reebok FR"
	                , "entityId": "890168"
	                , "products": [{
	                    "productId": "567"
	                    , "productDescription": "Account (UK)"
                            }, {
	                    "productId": "435"
	                    , "productDescription": "Echannel (UK)"
                    }]
                }]
	       }]
	    };
	    $scope.createCase = {
	        "caseId": "005"
	    };
	    $scope.searchEntities = {
	        "entities": [{
	                "entityId": "123456"
	                , "entityName": "Crocs Footwear UK LTD"
	            }
	            , {
	                "entityId": "234567"
	                , "entityName": "Crocs Footwear France S.A"
	            }
	            , {
	                "entityId": "456789"
	                , "entityName": "Crocs Fashion Spain S.A"
	            }]
	    };
	    $scope.entityList = {
	        "entities": [{
	                "entityId": "123456"
	                , "entityName": "Crocs Footwear UK LTD"
	                , "conflicts": [{"caseId":"005"},{"caseId":"006"}]
	            }
	            , {
	                "entityId": "234567"
	                , "entityName": "Crocs Footwear France S.A"
	                , "conflicts": [{"caseId":"007"},{"caseId":"008"}]
	            }
	            , {
	                "entityId": "456789"
	                , "entityName": "Crocs Fashion Spain S.A"
	                , "conflicts": [{"caseId":"009"},{"caseId":"010"},{"caseId":"011"}]
	            }]
	    };
        
        $scope.entityDetails = {
            "entityId":"001",
            "entityName":"Crocs footwear UK LTD",
            "entityAddress":"10 King Street"
        };
        
        
	    // if we can have more than one entity on an individual case... then I think the products should be under the case/entities, then there would be no need to
	    // have an association to link entities to products, it would just be:
	});