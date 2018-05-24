import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todo = [];
  newtodo ="";
  index="";
  openToDoList = false;

  addToDo = function(){
    if(this.newtodo !="")
    this.todo.push(this.newtodo)
    this.openToDoList = false;
  }

  removeToDo = function(index){
    this.todo.splice(index,1)
    console.log(index);
  }

  openToDo = function(){
    this.openToDoList = true;
  }

}
