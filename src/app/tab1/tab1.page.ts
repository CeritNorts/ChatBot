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
    { username: 'Tano', message: 'Si bro', date: '01:32', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Luis', message: 'Nos vemos al rato', date: '01:35', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Ana', message: 'Hola, ¿cómo estás?', date: '01:36', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Mariana', message: 'Ya llegué', date: '01:37', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Carlos', message: 'Te mando la info al rato', date: '01:38', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Raúl', message: 'Todo bien?', date: '01:39', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Fernanda', message: 'Pasamos por ti?', date: '01:40', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Javier', message: 'Estoy en camino', date: '01:41', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Sofía', message: 'Qué onda?', date: '01:42', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Diana', message: 'Me puedes ayudar con algo?', date: '01:43', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Pedro', message: 'Nos vemos mañana', date: '01:44', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Juan', message: 'Sale pues', date: '01:45', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Lucía', message: 'Te llamo luego', date: '01:46', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Arturo', message: 'Listo para el viaje?', date: '01:47', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Miguel', message: 'Pasó algo raro', date: '01:48', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Andrea', message: 'Voy en camino', date: '01:49', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Manuel', message: 'No puedo ahora', date: '01:50', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Patricia', message: 'Te veo ahorita', date: '01:51', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Ricardo', message: 'Voy a llegar tarde', date: '01:52', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Gabriela', message: 'Ya comiste?', date: '01:53', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Daniel', message: 'Mándame la dirección', date: '01:54', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Natalia', message: 'Qué plan hay hoy?', date: '01:55', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Jorge', message: 'A qué hora nos vemos?', date: '01:56', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { username: 'Alejandra', message: 'Avísame cuando llegues', date: '01:57', avatarURL: 'https://ionicframework.com/docs/img/demos/avatar.svg' }
  ];

  constructor() {}

}
