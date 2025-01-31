import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { IonicModule } from '@ionic/angular';
import { ItemEstadosComponent } from './item-estados/item-estados.component';



@NgModule({
  declarations: [
    ItemChatComponent,
    ItemEstadosComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [	
    ItemChatComponent,
    ItemEstadosComponent
  ]
})
export class ComponentsModule { }
