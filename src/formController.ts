import * as angular from 'angular';

export interface IForm extends ng.IScope{
    name : string;
    hobi : Array<string>;
}

export class FormController implements ng.IController {
    
    

    constructor(private $scope : IForm){ 
        $scope.name = "";
        $scope.hobi = new Array;
    }
    
    myName(){ 
       this.getSelectedCheckboxes();
    }
  
    getSelectedCheckboxes(){
        
        this.$scope.hobi = new Array;

        
        let el : HTMLCollectionOf<Element>  = document.getElementsByClassName('h');
        
 
        for (let i =0; i< el.length; i++){
            let elements = el.item(i);
 
            let cekbox = <HTMLInputElement> elements;
            if(cekbox.checked){
               this.$scope.hobi.push(cekbox.value); 
            }     
        }
        alert(`
Nama : ${this.$scope.name},
Hobi : ${this.$scope.hobi.join(',')}        
        `);
    }

}