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
    { username: 'Emmanuel', message: 'Dice mi mamá que pongas papa a serenar para la alopecia', date: '01:28', avatarURL: 'https://picsum.photos/200/200?random=1' },
    { username: 'Pablo', message: 'Yes bro', date: '01:30', avatarURL: 'https://picsum.photos/200/200?random=2' },
    { username: 'Oscar', message: 'Eso no es cierto pa', date: '01:32', avatarURL: 'https://picsum.photos/200/200?random=3' },
    { username: 'Eliezer', message: 'okas okas', date: '01:32', avatarURL: 'https://picsum.photos/200/200?random=4' },
    { username: 'Tano', message: 'Si bro', date: '01:32', avatarURL: 'https://picsum.photos/200/200?random=5' },
    { username: 'Luis', message: 'Nos vemos al rato', date: '01:35', avatarURL: 'https://picsum.photos/200/200?random=6' },
    { username: 'Ana', message: 'Hola, ¿cómo estás?', date: '01:36', avatarURL: 'https://picsum.photos/200/200?random=7' },
    { username: 'Mariana', message: 'Ya llegué', date: '01:37', avatarURL: 'https://picsum.photos/200/200?random=8' },
    { username: 'Carlos', message: 'Te mando la info al rato', date: '01:38', avatarURL: 'https://picsum.photos/200/200?random=9' },
    { username: 'Raúl', message: 'Todo bien?', date: '01:39', avatarURL: 'https://picsum.photos/200/200?random=10' },
    { username: 'Fernanda', message: 'Pasamos por ti?', date: '01:40', avatarURL: 'https://picsum.photos/200/200?random=11' },
    { username: 'Javier', message: 'Estoy en camino', date: '01:41', avatarURL: 'https://picsum.photos/200/200?random=12' },
    { username: 'Sofía', message: 'Qué onda?', date: '01:42', avatarURL: 'https://picsum.photos/200/200?random=13' },
    { username: 'Diana', message: 'Me puedes ayudar con algo?', date: '01:43', avatarURL: 'https://picsum.photos/200/200?random=14' },
    { username: 'Pedro', message: 'Nos vemos mañana', date: '01:44', avatarURL: 'https://picsum.photos/200/200?random=15' },
    { username: 'Juan', message: 'Sale pues', date: '01:45', avatarURL: 'https://picsum.photos/200/200?random=16' },
    { username: 'Lucía', message: 'Te llamo luego', date: '01:46', avatarURL: 'https://picsum.photos/200/200?random=17' },
    { username: 'Arturo', message: 'Listo para el viaje?', date: '01:47', avatarURL: 'https://picsum.photos/200/200?random=18' },
    { username: 'Miguel', message: 'Pasó algo raro', date: '01:48', avatarURL: 'https://picsum.photos/200/200?random=19' },
    { username: 'Andrea', message: 'Voy en camino', date: '01:49', avatarURL: 'https://picsum.photos/200/200?random=20' },
    { username: 'Manuel', message: 'No puedo ahora', date: '01:50', avatarURL: 'https://picsum.photos/200/200?random=21' },
    { username: 'Patricia', message: 'Te veo ahorita', date: '01:51', avatarURL: 'https://picsum.photos/200/200?random=22' },
    { username: 'Ricardo', message: 'Voy a llegar tarde', date: '01:52', avatarURL: 'https://picsum.photos/200/200?random=23' },
    { username: 'Gabriela', message: 'Ya comiste?', date: '01:53', avatarURL: 'https://picsum.photos/200/200?random=24' },
    { username: 'Daniel', message: 'Mándame la dirección', date: '01:54', avatarURL: 'https://picsum.photos/200/200?random=25' },
    { username: 'Natalia', message: 'Qué plan hay hoy?', date: '01:55', avatarURL: 'https://picsum.photos/200/200?random=26' },
    { username: 'Jorge', message: 'A qué hora nos vemos?', date: '01:56', avatarURL: 'https://picsum.photos/200/200?random=27' },
    { username: 'Alejandra', message: 'Avísame cuando llegues', date: '01:57', avatarURL: 'https://picsum.photos/200/200?random=28' }
];

  constructor() {}

}
