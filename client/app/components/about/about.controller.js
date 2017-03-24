class AboutController {
  constructor() {
    this.name = 'about';
      this.raja=[
                  { "text":"learn angular", "done":true },
                  { "text":"build an angular app", "done":false},
                  { "text":"something", "done":false },
                  { "text":"another todo", "done":true }
                ]

//  var App = angular.module('App', []);

// App.controller('TodoCtrl', function($scope, $http) {
//   $http.get('raja')
//        .then(function(res){
//           $scope.raja = res.data;                
//         });
// });
  }
}

export default AboutController;
