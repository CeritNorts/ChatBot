import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  estados = [
    { username: 'Mi estado', date: '6:57 p. m.', avatarURL: 'data:image/jpeg;base64,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' },
  ];

  estados2 = [
    { username: 'Pablo', date: 'hace 10 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Oscar', date: 'hace 15 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Eliezer', date: 'hace 20 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Tano', date: 'hace 25 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg'}
  ];

  estados3 = [
    { username: 'Rodirgo', date: 'hace 10 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Hoan', date: 'hace 15 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Mocha', date: 'hace 20 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Mons', date: 'hace 25 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    { username: 'Lachi', date: 'hace 10 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Vanessa', date: 'hace 15 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Luis', date: 'hace 20 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Mariana', date: 'hace 10 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Carlos', date: 'hace 15 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Raul', date: 'hace 20 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Fernando', date: 'hace 25 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    { username: 'Javier', date: 'hace 10 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Sofia', date: 'hace 15 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Diana', date: 'hace 20 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Ana', date: 'hace 25 minutos', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg'}
  ];

  constructor() {}

}
