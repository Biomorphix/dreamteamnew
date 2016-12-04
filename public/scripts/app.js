var myApp = angular.module('app', ['ui.router', 'ngTouch'])
    // .controller('apppp', function ($scope, $state) {
    //
    // });

myApp.config(function($stateProvider) {

    // var loginState = {
    //     name: 'login',
    //     url: '/',
    //     controller: 'appCtrl',
    //     template: tmap.login
    // };

    var wishState = {
        url: '/wish',
        name: 'wish',
        template: tmap.wish,
        controller: 'wishCtrl'
    };
    // var guideState = {
    //     name: 'guide',
    //     url: '/guide',
    //     template: '<h3>guide</h3>'
    // };


    var guide_profileState = {
        name: 'guide_profile',
        url: '/guide_profile',
        template: tmap.guideProfile,
        controller: 'guide_profile'
    };

    var currentProccessState = {
        name: 'currentProccess',
        url: '/currentProccess',
        template: tmap.currentProccess,
        controller: 'currentCtrl'
    };


    // $stateProvider.state(loginState);
    $stateProvider.state(wishState);
    // $stateProvider.state(guideState);
    $stateProvider.state(guide_profileState);
    $stateProvider.state(currentProccessState);
});

//helvetica