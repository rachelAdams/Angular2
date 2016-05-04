///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

//start up our application
import {bootstrap} from 'angular2/platform/browser'; //starts app

//import our component from app.component.ts. 
//Have to export in that file to be able to import here.
import {AppComponent} from "./app.component"; 

//starts up app with our component
bootstrap(AppComponent);

//Don't touch app, node_modules, or src folders
