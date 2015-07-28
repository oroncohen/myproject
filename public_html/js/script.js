// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {


    o1.create(); //draw board #1 
    o2.create(); //draw board #2 

    $scope.changeMap = function(d) {


    var o1 = new Board("svg1");
    o1.create();
    var o2 = new Board("svg2");
    o2.create();
          switch(d)
              {
          case "School":
                     {
                        console.log(d)
                           $('svg').css('background-image',"url(img/school.jpg)")
           
                           break;
                     } 
                           case "Arena":
                     {
                        console.log(d)
                           $('svg').css('background-image',"url(http://graphics.fansonly.com/schools/miss/graphics/mizzou-arena-map-flip-12.jpg)")
                           break;
                     } 
                     case "Hospital":
                     {
                        console.log(d)
                                $('svg').css('background-image',"url(http://www.nationwidechildrens.org/Document/Get/102456)")
                     break;
                     }
             }

    }
        });
    
    
    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });