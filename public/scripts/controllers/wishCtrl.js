angular.module('app')
    .controller('wishCtrl', function ($scope, $state) {
        $scope.data = [{
                bi_photo: "./img/photo.png",
                bi_title: "Simple in the woods",
                bi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!"
             }, {
                bi_photo: "./img/photo.png",
                bi_title: "Hardly goeng!",
                bi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!"
             },
             {
                bi_photo: "./img/photo.png",
                bi_title: "Slow dive",
                bi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!"
             }];

        $scope.user = {
            bi_count: 0,
            bi_array: []
        };

        $scope.counter = 0;

        $scope.add = function () {

            $scope.user.bi_count += 1;
            console.log('add');
            $('#statusBar').removeClass('is-lowest-value').val($scope.user.bi_count * 20);
            if($scope.user.bi_count == 5) {
                $state.go('guide_profile');
            } else {
                next();
            }
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
    });