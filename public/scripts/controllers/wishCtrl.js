angular.module('app')
    .controller('wishCtrl', function ($scope, $state) {
        $scope.data = [{
                bi_photo: "./pic_bi/bike.jpg",
                bi_title: "Mountain biking",
                bi_desc: "Whant to have an extreme journey? Ride couple of hours on the mountain trails"
             }
                //bi_photo: "./pic_bi/food.jpg",
                // bi_title: "National food",
                // bi_desc: "Explore traditions and taste national food."
             ,
             {
                bi_photo: "./pic_bi/rafting.jpg",
                bi_title: "Rafting",
                bi_desc: "Test yourself on the water!adsdadasdasdasdasdasd"
             },
             {
                bi_photo: "./pic_bi/horse.jpg",
                bi_title: "Horse ride",
                bi_desc: "Get closer with nature, have a horse ride!"
             },
             {
                bi_photo: "./pic_bi/kumys.jpg",
                bi_title: "National drinks",
                bi_desc: "Try Kyrgyz national drinks. Very healthy way to explore our traditions."
             },
             {
                bi_photo: "./pic_bi/yurt.jpg",
                bi_title: "Yurt camp",
                bi_desc: "Feel yourself as nomad! Sleep in a yurt, take a breath of fresh air!"
             },
             {
                bi_photo: "./pic_bi/kokboru.jpg",
                bi_title: "National sport games: Kokboru",
                bi_desc: "Explore national sport games. Be part of exciting competitions."
             },
             {
                bi_photo: "./pic_bi/aplinism.jpg",
                bi_title: "Alpinism",
                bi_desc: "Try yourself on climbing in mountains."
             }];

        $scope.user = {
            bi_count: 0,
            bi_array: []
        };

        $scope.counter = 0;

        $scope.add = function () {
            $scope.user.bi_count += 1;
            console.log('add');
            $( "#progressbar" ).progressbar({
                value: $scope.user.bi_count * 20
            });
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
