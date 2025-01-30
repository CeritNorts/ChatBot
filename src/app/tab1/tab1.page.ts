import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  //Generamos la lista de mensajes que se utilizará en el chat por medio de *ngFor
  chats = [
    { username: 'Emmanuel', message: 'Dice mi mamá que pongas papa a serenar para la alopecia', date: '01:28', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Pablo', message: 'Yes bro', date: '01:30', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Oscar', message: 'Eso no es cierto pa', date: '01:32', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Eliezer', message: 'okas okas', date: '01:32', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Tano', message: 'Si bro', date: '01:32', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ];

  constructor() {}

}
