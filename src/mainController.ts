
export interface ICustomScope extends ng.IScope{
    title : string;
    nama : string ;
}

export class MainController implements ng.IController{
    constructor($scope : ICustomScope){
        $scope.title = "Hello World";
        $scope.nama = "Arief";
    }
}
