var myApp = angular.module('app', ['ui.router', 'ngTouch']);

myApp.config(function($stateProvider) {

    var loginState = {
        name: 'login',
        url: '/',
        template: '<h3 class="loginPage_title">Amazing app</h3><p class="loginPage_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto distinctio ipsa odit omnis veniam voluptatem. Asperiores assumenda corporis dolorem exercitationem expedita inventore quidem quisquam rerum! Animi dolor, sed.</p><button class="loginPage_btn" ng-click="authorize(buttons.traveller)">Traveller</button><button ng-click="authorize(buttons.guide)" class="loginPage_btn">Guide</button>',
        controller: 'appCtrl'
    };

    var wishState = {
        name: 'wish',
        url: '/wish',
        template: '<img class="bi_photo" ng-swipe-right="skip()" ng-swipe-left="add(data[counter].bi_title)" src={{data[counter].bi_photo}}> ' +
                    '<h3 class="bi_title" ng-bind=data[counter].bi_title></h3>' +
                    ' <p class="bi_desc" ng-bind=data[counter].bi_desc>>' +
                    '</p><div class="bi_statusBar">{{user.bi_count}} / 5</div>',
        controller: 'wishCtrl'
    };

    var guideState = {
        name: 'guide',
        url: '/guide',
        template: '<h3>guide</h3>'
    };

    var guide_profileState = {
        name: 'guide_profile',
        url: '/guide_profile',
        template: '<h3>guide_profile</h3>',
        controller: 'guide_profile'
    };


    $stateProvider.state(loginState);
    $stateProvider.state(wishState);
    $stateProvider.state(guideState);
    $stateProvider.state(guide_profileState);
});

//helvetica