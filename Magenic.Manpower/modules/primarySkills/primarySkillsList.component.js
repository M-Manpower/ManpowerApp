(function () {
    'use strict';


    const primarySkillListComponent = {
        bindings: {},
        templateUrl: 'modules/primarySkills/primarySkillsList.component-tmpl.html',
        controller: ['_', primarySkillListController]
    };


    function primarySkillListController(_) {

        this.filter = "";
        this.isAllSkillsSelected = false;

        this.$onInit = function () {

            this.primarySkills = [
                { id: 1, name: 'Java', description: 'This is a PL 1', isActive: true, selected: false },
                { id: 2, name: '.Net', description: 'This is a PL 2', isActive: false, selected: false },
                { id: 3, name: 'PHP', description: 'This is a PL 3', isActive: true, selected: false },
                { id: 4, name: 'C#', description: 'This is a PL 4', isActive: false, selected: false },
                { id: 5, name: 'VB.NET', description: 'This is a PL 5', isActive: true, selected: false }
            ];

        };

        this.$onChanges = function (changes) {

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