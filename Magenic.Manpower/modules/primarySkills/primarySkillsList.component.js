(function () {
    'use strict';
   
    const primarySkillListComponent = {
        bindings: { },
        templateUrl: 'modules/primarySkills/primarySkillsList.component-tmpl.html',
        controller: ['_', 'filterFilter', 'primarySkillsService', primarySkillListController]
    };
   
    function primarySkillListController(_, filterFilter, primarySkillsService) {
        
        var vm = this;
        
        vm.filter = "";
        vm.isAllSkillsSelected = false;
               
        vm.primarySkillsOriginalState = [];
        vm.primarySkills = [];
        
        vm.$onInit = function () {
            
            //Get data from Service
            vm.primarySkills = primarySkillsService.getPrimarySkills();

            vm.pager = {
                pageSize: 20,
                totalItems: this.primarySkills.length,
                currentPage: 1              
            };

            vm.pager['maxSize'] = Math.ceil(this.pager.totalItems / this.pager.pageSize);
     
        };  

        vm.$onChanges = function (changes) {
            
        };

        vm.filterChange = function () {
            vm.filtered = filterFilter(this.primarySkills, this.filter);
            
            //Re-calculate pager
            vm.pager['totalItems'] = this.filtered.length;
            vm.pager['currentPage'] = 1;
            vm.pager['maxSize'] = Math.ceil(this.pager.totalItems / this.pager.pageSize);
        };

        vm.selectAllSkills = function () {

            _.each(vm.primarySkills, (skill) => {

                skill.selected = this.isAllSkillsSelected;

            });

        };

        vm.deactivateSelectedSkills = function () {

            _.each(vm.primarySkills, (skill) => {

                if (skill.selected) {
                    skill.isActive = false;
                }

            });

        };
       
    };

    angular.module('manpowerApp')
      .component('primarySkillsList', primarySkillListComponent);

})();