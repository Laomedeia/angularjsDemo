var ngRouteMod = angular.module('myApp', ['ngRoute', 'myApp.services']);
// ngRouteMod.config(['$routeProvider', function($routeProvider) { 
// $routeProvider 
//  .when('/', { 
//      templateUrl: 'route1.html', 
//      controller: 'HomeController' 
//  })
//  .when('/login', { 
//      templateUrl: 'route2.html', 
//      controller: 'LoginController' 
//  }) 
//  // .when('/dashboard', { 
//  //  templateUrl: 'views/dashboard.html', 
//  //  controller: 'DashboardController', 
//  //  resolve: { 
//  //  user: function(SessionService) { 
//  //  return SessionService.getCurrentUser(); 
//  //  } 
//  //  } 
//  // }) 
//  .otherwise({ 
//      redirectTo: '/' 
//  });
// }]); 

// ngRouteMod.run(function($rootScope, $location) {
//     console.log($location);
// });


//创建ng服务
angular.module('myApp.services', []).factory('githubService', function($http) {
    //serviceInstance现在可以在函数定义中访问$http服务
    var githubUrl = 'https://api.github.com';
    var runUserRequest = function(username, path) {
        // 从使用JSONP调用Github API的$http服务中返回promise 
        return $http({
            method: 'JSONP',
            url: githubUrl + '/users/' +
                username + '/' +
                path + '?callback=JSON_CALLBACK'
        });
    };
    // 返回带有一个events函数的服务对象
    return {
        events: function(username) {
            return runUserRequest(username, 'events');
        }
    }

});

//使用服务
ngRouteMod.controller('githubServiceController', function($scope, githubService) {
    //     $http.jsonp('http://librivox.org/api/feed/audiobooks/author/Melville?format=jsonp&callback=JSON_CALLBACK').success(function (data) {
    //     $scope.data = data;
    // });
    console.log(githubService.events('wutheringsea'));
    githubService.events('wutheringsea').success(function(data) {
        $scope.events = data.data;
    });
});
