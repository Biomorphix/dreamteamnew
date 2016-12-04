angular.module('app')
    .controller('guide_profile', ["$scope", "$state", "$http", function ($scope, $state, $http) {
        $scope.data = [{
            gi_photo: "./img/photo.png",
            gi_title: "gi_title",
            gi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!",
            bi: ["extrim", "diving", "downshifting"],
            prising: [
                {
                    text: "I will show u new lands",
                    cost: 100
                },
                {
                    text: "Go with me in the deep",
                    cost: 10
                }
            ]
        },{
            gi_photo: "./img/photo.png",
            gi_title: "gi_title 111",
            gi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!",
            bi: ["extrim", "diving", "downshifting"],
            prising: [
                {
                    text: "I will show u new lands 11",
                    cost: 100
                },
                {
                    text: "Go with me in the deep 111s",
                    cost: 10
                }
            ]
        }];

        $scope.choose = function () {
            var dialog = document.querySelector('dialog');
            console.log(dialog)
            dialog.showModal();
            dialog.querySelector('.close').addEventListener('click', function() {
                dialog.close();
            });
        };

        $scope.skip = function () {
            console.log('skip');
            next();
        };

        $scope.acceptGuide = function (guide) {
            $state.go('currentProccess');
        };

        function next() {
            $scope.counter += 1;
            if ($scope.counter == $scope.data.length) {
                $scope.counter = 0;
            }
        }

        $scope.counter = 0;

    }]);