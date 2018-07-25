import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userInfo = {
    name: 'Eliza',
    surname: 'Ksajikyan',
    age: 29,
    email: 'eliza.ksajikyan.h@gmail.com'
  };

  removeUserList() {
    this.userInfo = {};
  }
}
