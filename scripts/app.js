var myApp = angular.module('app', ['ui.router', 'ngTouch']);

myApp.config(function($stateProvider) {

    var loginState = {
        name: 'login',
        url: '/',
        controller: 'appCtrl',
        template: '<div class="container start-page">   <div class=" text-h">            <h1>WishMaster</h1>        </div>        <div class="row">  <div class="text-desc">         <h2>Descr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ab hic magni necessitatibus facere officiis, in obcaecati rationentur suscipit nam. Quod dolorum, voluptates neque!</h2>         </div>        </div>        <div class="continue">            <p>Continue as a...</p>        </div>        <div class="row ch-btns">            <div class="col-xs-10 col-xs-offset-1 guide">                <a ng-click=authorize(buttons.traveller)>GUIDE</a>            </div>            <div class="col-xs-10 col-xs-offset-1 tourist">                <a ng-click=authorize(buttons.traveller)>TOURIST</a>            </div>        </div>    </div>'

    };

    var wishState = {
        name: 'wish',
        url: '/wish',
        template: '<div class="bi_head">&lt back</div><div class="bi-photo"><img class="bi_photo" height="360px" ng-swipe-right="skip()" ng-swipe-left="add(data[counter].bi_title)" src={{data[counter].bi_photo}}> </div>' +
                    '<h3 class="bi_title" ng-bind=data[counter].bi_title></h3>' +
                    ' <p class="bi_desc" ng-bind=data[counter].bi_desc>' +
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
        template:
        '<img class="bi_photo" ng-swipe-right="skip()" ng-swipe-left="choose(data[counter].gi_title)" src={{data[counter].gi_photo}}> ' +
        '<h3 class="bi_title" ng-bind=data[counter].gi_title></h3>' +
        ' <p class="bi_desc" ng-bind=data[counter].gi_desc>>' +
        '<ul>' +
        '<li ng-repeat="price in data[counter].prising">{{price.text}} | {{price.cost}}</li></ul>',
        controller: 'guide_profile'
    };


    $stateProvider.state(loginState);
    $stateProvider.state(wishState);
    $stateProvider.state(guideState);
});

//helvetica