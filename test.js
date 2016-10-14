describe('Controller', function() {
    beforeEach(module('myApp'));
    var $controller;
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    describe('Contains the data', function() {
        it('testing', function() {
            var $scope = {};
            var controller = $controller('firstCont', {
                $scope: $scope
            });
            expect($scope.obj).toContain({
                task_ID: '10',
                task_name: 'Task_node'
            });
        });


        it('is Added', function() {
            var $scope = {};
            var modalInstance;
            modalInstance = {
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            var controller = $controller('secondCont', {
                $scope: $scope,
                $uibModalInstance: modalInstance
            });
            $scope.id = "70";
            $scope.name = "task_react";
            $scope.add_data();
            expect(obj).toContain({
                task_ID: '70',
                task_name: 'task_react'
            });
        });


        it('is deleted', function() {
            var $scope = {};
            var controller = $controller('firstCont', {
                $scope: $scope
            });
            $scope.id = "10";
            $scope.name = "task_node";
            $scope.remove();
            expect($scope.obj).not.toContain({
                task_ID: '10',
                task_name: 'task_node'
            });
        });
    });

});