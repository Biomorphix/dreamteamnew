angular.module('app')
    .controller('currentCtrl', function () {
        $(function(){
            var options =  {
                content: "Wait for acceptation", // text of the snackbar
                style: "toast", // add a custom class to your snackbar
                timeout: 2000 // time in milliseconds after the snackbar autohides, 0 is disabled
            };

            $.snackbar(options);
        });
    });