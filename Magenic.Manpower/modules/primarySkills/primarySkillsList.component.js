(function () {
    'use strict';


    const primarySkillListComponent = {
        bindings: { },
        templateUrl: 'modules/primarySkills/primarySkillsList.component-tmpl.html',
        controller: ['_', 'filterFilter', primarySkillListController]
    };

    function primarySkillListController(_, filterFilter) {
        
        var ctrl = this;
        
        this.filter = "";        
        this.isAllSkillsSelected = false;
               
        this.primarySkillsOriginalState = [];
        this.primarySkills = [];
        
        this.$onInit = function () {
            
            this.primarySkills = [
               { id: 1, name: 'Java', description: 'This is a PL 1', isActive: true},
               { id: 2, name: '.Net', description: 'This is a PL 2', isActive: false },
               { id: 3, name: 'PHP', description: 'This is a PL 3', isActive: true },
               { id: 4, name: 'C#', description: 'This is a PL 4', isActive: false },
               { id: 5, name: 'VB.NET', description: 'This is a PL 5', isActive: true }
            ];

            this.pager = {
                pageSize: 20,
                totalItems: this.primarySkills.length,
                currentPage: 1              
            };

            this.pager['maxSize'] = Math.ceil(this.pager.totalItems / this.pager.pageSize);
     
        };  

        this.$onChanges = function (changes) {
            
        };

        this.filterChange = function () {
            this.filtered = filterFilter(this.primarySkills, this.filter);
            
            //Re-calculate pager
            this.pager['totalItems'] = this.filtered.length;
            this.pager['currentPage'] = 1;                        
            this.pager['maxSize'] = Math.ceil(this.pager.totalItems / this.pager.pageSize);
        };

        this.selectAllSkills = function () {

            _.each(this.primarySkills, (skill) => {

                skill.selected = this.isAllSkillsSelected;

            });

        };

        this.deactivateSelectedSkills = function () {

            _.each(this.primarySkills, (skill) => {

                if (skill.selected) {
                    skill.isActive = false;
                }

            });

        };
       
    };

    angular.module('manpowerApp')           
          .component('primarySkillsList', primarySkillListComponent);    

})();