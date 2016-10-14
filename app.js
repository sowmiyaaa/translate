var obj = [{
    task_ID: "10",
    task_name: "Task_node"
}, {
    task_ID: "20",
    task_name: "Task_express"
}, {
    task_ID: "30",
    task_name: "Task_boot"
}, {
    task_ID: "40",
    task_name: "Task_mongo"
}, {
    task_ID: "50",
    task_name: "Task_knockout"
}, {
    task_ID: "60",
    task_name: "Task_angular"
}];
var app = angular.module('myApp', ['ui.bootstrap', 'pascalprecht.translate']);

app.config(['$translateProvider', '$translatePartialLoaderProvider', function($translateProvider, $translatePartialLoaderProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/i18n/home/{lang}.json'
    });

}])
angular.module('myApp').controller('firstCont', ['$scope', '$uibModal', '$translatePartialLoader', '$translate', function($scope, $uibModal, $translatePartialLoader, $translate) {

    $scope.chang = function(val) {
        alert(val);
        $translatePartialLoader.addPart('home');
        $translate.use(val);
    }
    $translatePartialLoader.addPart('home');
    $translate.use('english');
    $scope.text = "english";
    $scope.obj = obj;
    $scope.open = function() {
        var modalInstance = $uibModal.open({
            controller: 'secondCont',
            templateUrl: 'Popup.html',
        });
    }

    $scope.num = /^[0-9]+$/;


    $scope.arr = [];
    $scope.check = function(chk, n) {

        if (chk) {
            console.log(n);
            $scope.arr[n] = true;
        } else {
            $scope.arr[n] = false;
        }
    }
    $scope.remove = function(i) {
        obj.splice(i, 1);
        $scope.arr.splice(i, 1);
    }
}]);
angular.module('myApp').controller('secondCont', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    $scope.add_data = function() {
        if ($scope.id && $scope.name) {
            var f = 1;
            angular.forEach(obj, function(value, key) {
                if (value.task_ID == $scope.id) {
                    alert("oops! ID already exists");
                    f = 0;
                }
            });
            if (f == 1) {
                obj.push({
                    'task_ID': $scope.id,
                    'task_name': $scope.name
                });
                $scope.name = "";
                $scope.id = "";
                //alert("NEW DETAIL ADDED");

            }

        }
    }
    $scope.close = function() {
        $uibModalInstance.dismiss('cancel');
    };
}]);