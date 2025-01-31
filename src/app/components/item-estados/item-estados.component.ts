import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-estados',
  templateUrl: './item-estados.component.html',
  styleUrls: ['./item-estados.component.scss'],
  standalone: false,
})
export class ItemEstadosComponent  implements OnInit {

  @Input() username: string = '';
  @Input() message: string = '';
  @Input() avatarURL: string = '';

  constructor() { }

  ngOnInit() {}

}
