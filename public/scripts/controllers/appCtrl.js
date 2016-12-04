angular.module('app')
    .controller('appCtrl', function ($scope, $state) {

        $scope.buttons = {
            traveller: 'traveler',
            guide: 'guide'
        };

        $scope.authorize = function (to) {
            
            if(to == 'guide') {
                $state.go('guide')
            } else {
                console.log(to)
                $state.go('wish');
            }
        }
    });