import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
     username ="";
     password ="";

    login = function(){
        console.log("Login Funktion ausführen...")
        console.log(this.username);
        console.log(this.password);
    }

}
