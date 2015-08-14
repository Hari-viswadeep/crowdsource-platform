(function () {
    'use strict';

    angular
        .module('crowdsource.task.controllers')
        .controller('TaskOverviewController', TaskOverviewController);

    TaskOverviewController.$inject = ['$window', '$location', '$scope', '$mdToast', 'Task',
        '$filter', '$routeParams', 'Authentication'];

    /**
     * @namespace TaskOverviewController
     */
    function TaskOverviewController($window, $location, $scope, $mdToast, Task,
                               $filter, $routeParams, Authentication) {
        var self = this;
        self.tasks = [];
        self.getStatusName = getStatusName;
        self.sort = sort;
        self.config = {
            order_by: "",
            order: ""
        };

        activate();
        function activate(){
            var module_id = $routeParams.moduleId;
            Task.getTasks(module_id).then(
                function success(response) {
                    self.tasks = response[0].tasks;
                    self.project_name = response[0].project_name;
                    self.module_name = response[0].module_name;
                },
                function error(response) {

                }
            ).finally(function () {});
        }

        function getStatusName (status) {
            if(status == 1) {
                return 'created';
            }
            else if(status == 2){
                return 'in progress';
            }
            else if(status == 3){
                return 'accepted';
            }
            else if(status == 4){
                return 'returned';
            }
            else if(status == 5){
                return 'rejected';
            }
        }
        function toggle(item) {
            var idx = self.selectedItems.indexOf(item);
            if (idx > -1) self.selectedItems.splice(idx, 1);
            else self.selectedItems.push(item);
        }
        function isSelected(item){
            return !(self.selectedItems.indexOf(item) < 0);
        }

        function sort(header){
            var sortedData = $filter('orderBy')(self.myProjects, header, self.config.order==='descending');
            self.config.order = (self.config.order==='descending')?'ascending':'descending';
            self.config.order_by = header;
            self.tasks = sortedData;
        }
    }
})();