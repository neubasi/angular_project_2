import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todo;
 
  coursesObservable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.coursesObservable = this.getCourses('/todo');
  }
  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  
  }


