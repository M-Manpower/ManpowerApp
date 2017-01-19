(function () {
    'use strict';

    
    const primarySkillListComponent = {
        bindings: {},
        templateUrl: 'modules/primarySkills/primarySkillsList-tpl.html',
        controller: function () {

            this.$onInit = function () {
            
                this.primarySkills = [
                    { id: 1, name: 'Java', description: 'This is a PL 1', active: false },
                    { id: 2, name: '.Net', description: 'This is a PL 2', active: false },
                    { id: 3, name: 'PHP', description: 'This is a PL 3', active: false },
                    { id: 4, name: 'C#', description: 'This is a PL 4', active: false },
                    { id: 5, name: 'VB.NET', description: 'This is a PL 5', active: false }
                ];
                
            };

            this.$onChanges = function (changes) {
               
            };

            this.selectedSkill = function (id) {

                console.log(id);

            };

            this.deactivate = function () {



            };
            
        }
    };


    angular.module('manpowerApp')
         .component('primarySkillsList', primarySkillListComponent);

  
    
})();