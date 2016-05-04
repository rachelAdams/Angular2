//have to import component to be able to use it
import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';

//this file holds a complete ng2 component
//think of components like header, main content, footer, 
//articles in the main content section, etc

//decorator adds meta data to class
//this creates a javascript object
@Component({
    selector: 'my-app', //this tells ng2 where to imbed the component
    
    //can link to a template FILE with templateUrl, 
    //rather than template. For big chunks of html.
    template: `
        <h1>Hi there!</h1>
        <h2>Here's MyComponent:</h2>
        <my-component></my-component>
    `,
    directives: [MyComponentComponent] //components are directives! have to give this my-component!
})

//export this class to make it usable in other files
export class AppComponent {

}