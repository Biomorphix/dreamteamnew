angular.module('app')
    .controller('guide_profile', ["$scope", "$state", "$http", function ($scope, $state, $http) {
        $scope.data = [{
            gi_photo: "./pic_gi/2.jpg",
            gi_title: "Anatoliy",
            gi_desc: "Anatoliy is experienced sportsman.",
            bi: ["Mountain biking", "Rafting", "Alpinism"],
            prising: [
                {
                    text: "Mountain biking",
                    cost: 50
                },
                {
                    text: "Rafting",
                    cost: 80
                },
                {
                    text: "Alpinism",
                    cost: 100
                }
            ]
        },{
            gi_photo: "./img/3.jpg",
            gi_title: "Azalia",
            gi_desc: "Azalia know everything about Kyrgyz traditions!",
            bi: ["National drinks", "Yurt camp"],
            prising: [
                {
                    text: "National drikns",
                    cost: 50
                },
                {
                    text: "Yurt camping",
                    cost: 200
                }
            ]
        }];

        $(function(){
            var options =  {
                content: "Choose guide", // text of the snackbar
                style: "toast", // add a custom class to your snackbar
                timeout: 2000 // time in milliseconds after the snackbar autohides, 0 is disabled
            };

            $.snackbar(options);
        });

        $scope.choose = function () {
            var options =  {
                content: "This prise is ok?", // text of the snackbar
                style: "toast", // add a custom class to your snackbar
                timeout: 2000 // time in milliseconds after the snackbar autohides, 0 is disabled
            };

            $.snackbar(options);
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
