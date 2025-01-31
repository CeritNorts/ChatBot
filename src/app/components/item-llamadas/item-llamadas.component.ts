import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-llamadas',
  templateUrl: './item-llamadas.component.html',
  styleUrls: ['./item-llamadas.component.scss'],
  standalone: false, 
})
export class ItemLlamadasComponent  implements OnInit {

  @Input() username: string = '';
  @Input() message: string = '';
  @Input() icon: string = '';
  @Input() avatarURL: string = '';

  constructor() { }

  ngOnInit() {}

}
