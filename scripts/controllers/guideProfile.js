angular.module('app')
    .controller('guide_profile', function ($scope, $state) {
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
        }];

        $scope.choose = function () {

        };

        $scope.skip = function () {
            console.log('skip');
            next();
        };

        function next() {
            $scope.counter += 1;
            if ($scope.counter == $scope.data.length) {
                $scope.counter = 0;
            }
        }

        $scope.counter = 0;

    });