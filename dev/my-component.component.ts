//naming convention is component-name.component.ts

//lets us use component decorator
import {Component} from 'angular2/core';
import {TestComponent} from './test.component';
import {OnInit} from 'angular2/core';

@Component({ //create our javascript object
    selector: 'my-component', //html tag to embed this component
    //backticks to have multiline string
    template: ` 
    Hello, I'm <span [style.color]="awesomeInput.value == 'yes' ? 'red': ''">{{name}}</span>. This is my first ng2 app. 
    
    <span [class.is-awesome] = "awesomeInput.value == 'yes'">
    It's awesome!
    </span>
    <br>
    <br>
Is it awesome?
<input type="text" #awesomeInput (keyup) = "0">    
<br>
<br>
<button [disabled]="awesomeInput.value !== 'yes'">Only enabled if yes was entered</button>
<br>
<br>
<test></test>   
   
    `,
    //#awesomeInput creates a local variable. 
    //binds to COMPLETE element. not just input.
    //class is a built-in ng2 directive
    //add builtin events by using parens. causes dom to update
    //disabled isnt bound to the html prop. it's an ng2 directive
    //[] does something TO element
    //() get something FROM element. events.
    styleUrls: ['src/css/mycomponent.css'], //can also have styles, where we put in css as a string
    directives: [TestComponent]
})

//normally name would be like ClickthroughComponent
export class MyComponentComponent implements OnInit{
    name: string; //in CSP we want to read this in from JSON.
    //you could set a value here or just declare it as type string
    
    //oninit hook fires when component is initialized
    ngOnInit():any{
        this.name = 'Rachel';
    }
    
    constructor(){
       //could do something here. not great though 
       //since the page has to load first
    }
}