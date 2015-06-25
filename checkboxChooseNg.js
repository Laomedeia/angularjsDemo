var checkboxNgApp = angular.module('checkboxNgApp', ['ui.bootstrap']);
checkboxNgApp.controller('checkboxController', function($scope) {
    $scope.deviceFaults = [{
        faultID: 1,
        faultName: '翻新',
        faultDetail: [{
            checked: false,
            detailName: '换壳',
        }, {
           checked: false,
            detailName: '换瓶'
        }]
    }, {
        faultID: 2,
        faultName: '声音',
        faultDetail: [{
            checked: false,
            detailName: '停不到'
        }, {
           checked: false,
            detailName: '静音'
        }]
    }, {
        faultID: 3,
        faultName: '图像',
        faultDetail: [{
            checked: false,
            detailName: '看不到'
        }, {
            checked: false,
            detailName: '花掉'
        }]
    }]

    //$scope.detailFaults = 

    $scope.submitForm = function() {
    	console.log($scope.deviceFaults);	
    }
    
  //   $scope.allChooseFaults = [];

  //   $scope.myFaults = {
        
  //   };

  //   for(var i = 0, length = $scope.deviceFaults.length; i < length; i++){
  //   	var faults = $scope.deviceFaults[i]
  //   	for(var j= 0, length1 = faults.faultDetail.length; j < length1; j++){
  //   		$scope.myFaults = faults.faultDetail[j]
		// allChooseFaults.push($scope.myFaults);
  //   	}
  //   }


})
