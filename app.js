var myappmod = angular.module("MyApp", []);
myappmod.run(function($rootScope, $interval) { //按钮显示倒计时
    $rootScope.isDisabled = true;
    $rootScope.countDown = 5;
    var promise = $interval(function() {
        $rootScope.countDown -= 1;
        if ($rootScope.countDown == 0) {
            $rootScope.isDisabled = false;
            $interval.cancel(promise);
        };
    }, 1000);
});
myappmod.run(function($rootScope, $timeout) { //链接显示倒计时
    $timeout(function() {
        $rootScope.myHref = 'http://baidu.com';
    }, 2000);
});
myappmod.run(function($rootScope, $timeout) { //表达式生效前不加载图像
    $timeout(function() {
        $rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
    }, 2000);
});

myappmod.directive('myDirective', function() { //自定义标签命令
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: { // {} = isolate, true = child, false/undefined = no change
            baiduUrl: '=customUrl',
            myLinkText: '@'
        },
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        template: '<input type="text" ng-model="baiduUrl" /><a href="{{ myUrl }}">{{ myLinkText }}</a>',
        // templateUrl: '',
        // replace: true,  //template直接替换自定义标签，否则是嵌套在标签内部
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {

        }
    };
});
myappmod.controller('MyController', function($scope) { //控制器申明
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function() {
        $scope.clock.now = new Date();
    };
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();

    $scope.counter = 0;
    $scope.add = function(amount) {
        $scope.counter += amount
    };
})
.controller('PeopleController',  function($scope){
    $scope.people = [ 
        {name: "Ari", city: "San Francisco"}, 
        {name: "Erik", city: "Seattle"} ,
         {name: "lamela", city: "Brazil"} 
        ];
})
.controller('signupController',  function($scope) {
  $scope.submitted = false;
  $scope.signupForm = function() {
    if ($scope.signup_form.$valid) {
      // Submit as normal
      alert("ok");
    } else {
      $scope.submitted = true;
    }
  }
});
//自定义过滤器
myappmod.filter("capitalize", function() {
    return function(input) {
        if (input) {
            return input[0].toUpperCase() + input.slice(1);
        };
    }
})
