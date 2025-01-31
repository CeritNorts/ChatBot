import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  llamadas = [
    { username: 'Emmanuel', message: '➔ Ayer 5:03 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=1' }, // Saliente
    { username: 'Pablo', message: '⬅ Ayer 5:03 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=2' }, // Entrante
    { username: 'Oscar', message: '➔ Ayer 6:15 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=3' }, // Saliente
    { username: 'Eliezer', message: '⬅ Ayer 7:20 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=4' }, // Entrante
    { username: 'Tano', message: '➔ Ayer 8:45 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=5' }, // Saliente
    { username: 'Luis', message: '⬅ Ayer 9:10 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=6' }, // Entrante
    { username: 'Ana', message: '➔ Ayer 10:00 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=7' }, // Saliente
    { username: 'Mariana', message: '⬅ Ayer 11:30 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=8' }, // Entrante
    { username: 'Carlos', message: '➔ Hoy 8:00 am', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=9' }, // Saliente
    { username: 'Raúl', message: '⬅ Hoy 9:15 am', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=10' }, // Entrante
    { username: 'Fernanda', message: '➔ Hoy 10:30 am', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=11' }, // Saliente
    { username: 'Javier', message: '⬅ Hoy 11:45 am', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=12' }, // Entrante
    { username: 'Sofía', message: '➔ Hoy 12:00 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=13' }, // Saliente
    { username: 'Diana', message: '⬅ Hoy 1:15 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=14' }, // Entrante
    { username: 'Pedro', message: '➔ Hoy 2:30 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=15' }, // Saliente
    { username: 'Juan', message: '⬅ Hoy 3:45 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=16' }, // Entrante
    { username: 'Lucía', message: '➔ Hoy 4:00 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=17' }, // Saliente
    { username: 'Arturo', message: '⬅ Hoy 5:15 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=18' }, // Entrante
    { username: 'Miguel', message: '➔ Hoy 6:30 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=19' }, // Saliente
    { username: 'Andrea', message: '⬅ Hoy 7:45 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=20' }, // Entrante
    { username: 'Manuel', message: '➔ Hoy 8:00 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=21' }, // Saliente
    { username: 'Patricia', message: '⬅ Hoy 9:15 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=22' }, // Entrante
    { username: 'Ricardo', message: '➔ Hoy 10:30 pm', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=23' }, // Saliente
    { username: 'Gabriela', message: '⬅ Hoy 11:45 pm', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=24' }, // Entrante
    { username: 'Daniel', message: '➔ Ayer 12:00 am', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=25' }, // Saliente
    { username: 'Natalia', message: '⬅ Ayer 1:15 am', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=26' }, // Entrante
    { username: 'Jorge', message: '➔ Ayer 2:30 am', icon: '📞', avatarURL: 'https://picsum.photos/200/200?random=27' }, // Saliente
    { username: 'Alejandra', message: '⬅ Ayer 3:45 am', icon: '🎥', avatarURL: 'https://picsum.photos/200/200?random=28' } // Entrante
];

  constructor() {}

}
