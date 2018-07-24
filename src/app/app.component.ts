import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userinfo = {
    name: 'Eliza',
    surname: 'Ksajikyan',
    age: 29,
    email: 'eliza.ksajikyan.h@gmail.com'
  };

  removeUserList() {
    let user = document.getElementById('user');
    console.log(user);
    user.parentNode.removeChild(user);
  }
}
