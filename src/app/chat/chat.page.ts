import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
})

export class ChatPage implements OnInit {

  messages = [
    { username: 'Emmanuel', message: 'Dice mi mamá que pongas papa a serenar para la alopecia', date: '01:28', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Carlos', message: '¿En serio funciona eso?', date: '01:30', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Ana', message: 'Jajaja, quiero intentarlo.', date: '01:32', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
