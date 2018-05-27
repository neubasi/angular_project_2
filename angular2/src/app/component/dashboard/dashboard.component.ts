import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

    todo = [];
    newtodo ="";
    index="";
    openToDoList = false;
  
    addToDo = function(){
      if(this.newtodo !="")
      this.todo.push(this.newtodo)
      this.openToDoList = false;
      this.newtodo ="";
    }
  
    removeToDo = function(index){
      this.todo.splice(index,1)
      console.log(index);
    }
  
    openToDo = function(){
      this.openToDoList = true;
    }

}
