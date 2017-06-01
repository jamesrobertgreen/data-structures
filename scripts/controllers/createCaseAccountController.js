app.controller('createCaseAccountController', function ($scope) {

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
    };








});