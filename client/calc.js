var app = angular.module("App", []);
app.controller("AppController", function ($scope, $http) {
  $scope.regex = '\\d+';
  $scope.submitSuccess = false;
  $scope.submitted = false;
  $scope.result = 0;
  $scope.input = {};
  $scope.dblist  = {};

  $scope.submitForm = function (isValid) {

    if (isValid) {
    
      $scope.submitted = true;

      $scope.input = {
        num1: $scope.input1,
        num2: $scope.input2,
        result: $scope.input1 * $scope.input2

      };
      console.log("input:", $scope.input);
      $http.post('./app/saveData,', JSON.stringify($scope.input)).then(function (response) {
        $scope.submitSuccess = true;
        
        var statusCode = response.data.status_code;

        if (statusCode == 201) {
          var data = response.data.result.db_res;
          console.log("DATA IS:" + JSON.stringify(response));
          $scope.getData();
        } else if(statusCode == 501) { 
          $scope.submitSuccess = false;
          $scope.successMessage = "Request exists in DB.";
        } else {
        
          $scope.submitSuccess = false;
          $scope.successMessage = "Unable to submit to DB.";            
        }

      });

    } else {
      $scope.submitted = false;
    }
  }
  $scope.total = function() {
    $scope.result = $scope.input1 * $scope.input2;
    return $scope.result;
  }

  $scope.init = function () {
      $scope.getData();
  }

  $scope.getData = function() {
    //alert ("on page load event called");
    $http.get('./app/getData')
      .then(function (response) {
        console.log("insode getdata", response);
        var statusCode = response.data.status_code;
        var statusMsg = response.data.status;

        if(statusCode == 201) {
        var data = response.data.result.db_res;
      



        console.log(data);
        console.log(statusCode);
        console.log(statusMsg);


        $scope.dblist = data;
        }  else {
          alert("Unable to connect to DB.");  
        } 
      });

  }

});
