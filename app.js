var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ========================================
// Set routing for this app
// Each route will pull in a different controller

animateApp.config(function ($routeProvider) {

    $routeProvider

    // Home page
    .when('/', {
        templateUrl: 'page-home.html',
        controller: 'mainController'
    })

    // About page
    .when('/about', {
        templateUrl: 'page-about.html',
        controller: 'aboutController'
    })

    // Contact page
    .when('/contact', {
        templateUrl: 'page-contact.html',
        controller: 'contactController'
    });

});

// CONTROLLERS ========================================
// Home page controller
animateApp.controller('mainController', function ($scope) {
    $scope.pageClass = 'page-home';
});

// About page controller
animateApp.controller('aboutController', function ($scope) {
    $scope.pageClass = 'page-about';
});

// Contact page controller
animateApp.controller('contactController', function ($scope) {
    $scope.pageClass = 'page-contact';
});