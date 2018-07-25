import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // task one
  userInfo = {
    name: 'Eliza',
    surname: 'Ksajikyan',
    age: 29,
    email: 'eliza.ksajikyan.h@gmail.com'
  };
  showUser = true;

  removeUserList() {
    this.showUser = false;
  }

  // task two
  users = [
    {name: 'Karine', login: 'KarineK', password: '234567'},
    {name: 'Ani', login: 'AniAni', password: '234567'},
    {name: 'Hermine', login: 'Hermin', password: '67'},
    {name: 'Jon', login: 'JonJon', password: '67jsakhdk'},
  ];

  checkUserName(user) {
    if (user.name.indexOf('A') === -1) {
      return user;
    }
  }
}
