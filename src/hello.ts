import * as angular from 'angular';
import {MainController as Acontroller} from "./mainController";
import {FormController as formControl} from './formController';



let app =angular.module('mainApp',[]);


app.controller('formController',formControl);
app.controller('mainController',Acontroller);
















