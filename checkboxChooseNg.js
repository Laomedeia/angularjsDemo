var checkboxNgApp = angular.module('checkboxNgApp', ['ui.bootstrap']);
checkboxNgApp.controller('checkboxController', function($scope) {
        // $scope.deviceFaults = [{
        //     faultID: 1,
        //     faultName: 'BackNew',
        //     faultDetail: [{
        //         checked: false,
        //         detailName: 'change kernel',
        //     }, {
        //         checked: false,
        //         detailName: 'change screen'
        //     }]
        // }, {
        //     faultID: 2,
        //     faultName: 'Voice',
        //     faultDetail: [{
        //         checked: false,
        //         detailName: 'canot listen'
        //     }, {
        //         checked: false,
        //         detailName: 'slience'
        //     }]
        // }];

        $scope.phoneFaults = {
            allErrors: [{
                id: 1,
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
                id: 2,
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
                id: 3,
                question: "按键",
                des: "开机键失灵，按键手感变差、塌陷；HOME键失灵，按键手感变差",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "更换开机键",
                    price: 49,
                    isChecked: false
                }, {
                    solve: "更换HOME键",
                    price: 49
                }]
            }, {
                id: 4,
                question: "电池",
                des: "续航时间短；主板发热严重",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "更换电池",
                    price: 59,
                    isChecked: false
                }, {
                    solve: "更换后置摄像头",
                    price: 49
                }]
            }, {
                id: 5,
                question: "摄像头",
                des: "后置或前置摄像头无法打开、无法对焦",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "更换后置摄像头",
                    price: 49,
                    isChecked: false
                }, {
                    solve: "更换前置摄像头",
                    price: 49
                }]
            }, {
                id: 6,
                question: "耳机",
                des: "耳机无声，耳机有杂音，耳机孔变形",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "维修尾部音频插口",
                    price: 59,
                    isChecked: false
                }]
            }, {
                id: 7,
                question: "声音",
                des: "听筒无声，听筒杂音，听筒声音小；手机外放无声音，声音小，有杂音；免提送话无声，微信对方听不到自己说话",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "维修听筒",
                    price: 49,
                    isChecked: false
                }, {
                    solve: "维修扬声器",
                    price: 59
                }, {
                    solve: "维修开机线",
                    price: 49
                }, {
                    solve: "维修后置摄像头排线",
                    price: 59
                }]
            }, {
                id: 8,
                question: "充电",
                des: "无法充电，充电过慢，无法连接电脑",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "维修尾部充电插口",
                    price: 49,
                    isChecked: false
                }]
            }, {
                id: 9,
                question: "Wifi",
                des: "无WiFi信号，WiFi信号弱",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "维修Wifi天线",
                    price: 49,
                    isChecked: false
                }]
            }, {
                id: 10,
                question: "Sim卡",
                des: "插卡显示无SIM卡",
                isChecked: false,
                q_type: "1",
                solves: [{
                    solve: "维修SIM卡槽",
                    price: 19,
                    isChecked: false
                }]
            }, {
                id: 11,
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
            }],
            otherFaultsDesc: "",
            onDoorPrice: 38
        }

        $scope.qType = "1";

        //$scope.isCollapsed = true;
        $scope.notStartBtnEvent = function() {
            $scope.qType = "0";
            cancelFaultsState($scope.phoneFaults.allErrors);
        }

        $scope.canStartBtnEvent = function() {
            $scope.qType = "1";
            cancelFaultsState($scope.phoneFaults.allErrors);
        }

        // $scope.submitForm = function() {
        //     console.log($scope.deviceFaults);
        // }

        $scope.checkStuff = function($event, faultDetail) {
            var faultDetailIsChecked = !faultDetail.isChecked;
            //console.log($($event.target));
            if (faultDetailIsChecked) {
                //$scope.isCollapsed = false;
                $("#collapsedDiv").css("display", "block");
                //write price info
                var desc = "<b>故障描述：</b>" + faultDetail.des + "<br>";
                var solvesStr = "<b>解决方案及估价：</b><br>";
                for (var i in faultDetail.solves) {
                    solvesStr += faultDetail.solves[i].solve + "---" + faultDetail.solves[i].price + "元<br>";
                }
                $("#faultsDesp").html(desc + solvesStr);

            } else {
                //$scope.isCollapsed = true;
                var phoneErrors = $scope.phoneFaults.allErrors;
                var isCollapseDiv = true;
                for (var i in phoneErrors) {
                    if (faultDetail.id != phoneErrors[i].id && phoneErrors[i].isChecked == true) {
                        isCollapseDiv = false;
                        break;
                    }
                }
                if (isCollapseDiv) {
                    $("#collapsedDiv").css("display", "none");
                } else {
                    $("#collapsedDiv").css("display", "block");
                }
            };
        }

        $scope.submitChoseFaults = function() {
            console.log($scope.phoneFaults);
            var phoneErrors = $scope.phoneFaults.allErrors;
            getChooseFaultsPriceRange(phoneErrors);

        })

    function getChooseFaultsPriceRange(phoneErrors) {
        var minPrices = [];
        var maxPrices = [];
        for (var i in phoneErrors) {
            if (phoneErrors[i].isChecked == true) {
                var tempMinPrice = 0;
                var tempMaxPrice = 0;
                var chooseSolves = phoneErrors[i].solves;
                for (var k in chooseSolves) {
                    if (tempMinPrice == 0 || chooseSolves[k].price < tempMinPrice) {
                        tempMinPrice = chooseSolves[k].price;
                    }
                    if (tempMaxPrice == 0 || chooseSolves[k].price > tempMaxPrice) {
                        tempMaxPrice = chooseSolves[k].price;
                    }
                }
                minPrices.push(tempMinPrice);
                maxPrices.push(tempMaxPrice);
            }
        }
        if (minPrices.length == 0 || maxPrices.length == 0) {
            alert("没有选中任何故障!");
            return;
        }
        var lowPrice = 0,
            highPrice = 0;
        console.log(maxPrices);
        minPrices.forEach(function(element, index) {
            console.log(element);
            lowPrice += element;
        });
        maxPrices.forEach(function(element, index) {
            highPrice += element;
        });
        console.log("价格区间: " + lowPrice + "~" + highPrice);
    }
}

function cancelFaultsState(faults) {
    $("#faultsDesp").html("");
    $("#collapsedDiv").css("display", "none");
    for (var i in faults) {
        faults[i].isChecked = false;
    }
}
