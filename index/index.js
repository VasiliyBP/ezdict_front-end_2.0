angular.module('index', ['ui.utils','ui.router','ngAnimate']);

angular.module('index').config(function($stateProvider) {

    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'index/partial/index/index.html'
    });
    /* Add New States Above */
});

