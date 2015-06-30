var checkboxNgApp = angular.module('checkboxNgApp', ['ui.bootstrap']);
checkboxNgApp.controller('checkboxController', function($scope) {
    $scope.deviceFaults = [{
        faultID: 1,
        faultName: 'BackNew',
        faultDetail: [{
            checked: false,
            detailName: 'change kernel',
        }, {
            checked: false,
            detailName: 'change screen'
        }]
    }, {
        faultID: 2,
        faultName: 'Voice',
        faultDetail: [{
            checked: false,
            detailName: 'canot listen'
        }, {
            checked: false,
            detailName: 'slience'
        }]
    }];

    $scope.phoneFaults = {
        allErrors: [{
            id : 1,
            question: "外壳",
            des: "严重摔坏后壳变形，磨损；后盖损坏",
            isChecked: false,
            q_type: "1", //开机1/不开机0
            solves: [{
                solve: "准系统翻新",
                price: 248,
                isChecked: false
            }, {
                solve: "后盖",
                price: 49
            }]
        },{
            id : 2,
            question: "外壳",
            des: "严重摔坏后壳变形，磨损；后盖损坏",
            isChecked: false,
            q_type: "1", //开机1/不开机0
            solves: [{
                solve: "准系统翻新",
                price: 248,
                isChecked: false
            }, {
                solve: "后盖",
                price: 49
            }]
        },{
            id : 3,
            question: "外壳",
            des: "严重摔坏后壳变形，磨损；后盖损坏",
            isChecked: false,
            q_type: "1", //开机1/不开机0
            solves: [{
                solve: "准系统翻新",
                price: 248,
                isChecked: false
            }, {
                solve: "后盖",
                price: 49
            }]
        }, {
            id : 4,
            question: "屏幕",
            des: "屏幕碎裂，屏幕不亮，触控失灵；无法自动调节屏幕亮度，正常贴脸打电话屏幕不灭；续航时间短，主板发热严重",
            isChecked: false,
            q_type: "1",
            solves: [{
                solve: "屏幕总成",
                price: 198,
                isChecked: false
            }, {
                solve: "开机线",
                price: 49
            }, {
                solve: "前置摄像头排线",
                price: 59
            }]
        }, {
            id : 5,
            question: "无法开机",
            des: "无法开机",
            isChecked: false,
            q_type: "0",
            solves: [{
                solve: "开机键",
                price: 49,
                isChecked: false
            }, {
                solve: "电池",
                price: 59
            }, {
                solve: "尾部充电口",
                price: 49
            }]
        }]
        , onDoorPrice: 38
    }

    //$scope.isCollapsed = true;
     console.log(window.screen.width);

    $scope.submitForm = function() {
        console.log($scope.deviceFaults);
    }

    $scope.checkStuff = function($event, faultDetail) {
        var faultDetailIsChecked = !faultDetail.isChecked;
        //console.log($($event.target));
        if (faultDetailIsChecked) {
            //$scope.isCollapsed = false;
            $("#collapsedDiv").css("display",  "block");
        } else {
            //$scope.isCollapsed = true;
            var phoneErrors =  $scope.phoneFaults.allErrors;
            var isCollapseDiv = true;
            for(var i in phoneErrors) {
                if (faultDetail.id != phoneErrors[i].id &&  phoneErrors[i].isChecked == true) {
                    isCollapseDiv = false;
                    break;
                }   
            }
            if (isCollapseDiv) {
                    $("#collapsedDiv").css("display",  "none");
            } else{
                 $("#collapsedDiv").css("display",  "block");             
            }
        };
    }

})
